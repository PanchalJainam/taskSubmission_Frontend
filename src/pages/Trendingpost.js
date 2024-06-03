import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";

const Trendingpost = () => {
  const [data, setData] = useState();

  async function getData() {
    await axios
      .get("http://localhost:5000/api/trending/allItem")
      .then((res) => {
        setData(res?.data);
      })
      .catch((e) => console.log(e));
  }

  console.log(data);
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="">
          <Table.Head className="text-[16px]">
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Ip Address</Table.HeadCell>
            <Table.HeadCell>Trend 1</Table.HeadCell>
            <Table.HeadCell>Trend 2</Table.HeadCell>
            <Table.HeadCell>Trend 3</Table.HeadCell>
            <Table.HeadCell>Trend 4</Table.HeadCell>
            <Table.HeadCell>Trend 5</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>

          {data &&
            data?.length > 0 &&
            data?.map((item, index) => {
              return (
                <>
                  <Table.Body className="divide-y text-[14px]" key={index}>
                    <Table.Row className="bg-white text-black dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>{item?.date}</Table.Cell>
                      <Table.Cell>{item?.ipAddress}</Table.Cell>
                      <Table.Cell>{item?.trend1}</Table.Cell>
                      <Table.Cell>{item?.trend2}</Table.Cell>
                      <Table.Cell>{item?.trend3}</Table.Cell>
                      <Table.Cell>{item?.trend4}</Table.Cell>
                      <Table.Cell>{item?.trend5}</Table.Cell>
                      <Table.Cell>
                        <p
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </p>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </>
              );
            })}
        </Table>
      </div>
    </>
  );
};

export default Trendingpost;
