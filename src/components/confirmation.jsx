import React from "react";
import { Table, Button, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLogoPaypal } from "react-icons/io5";

const Confirmation = () => {
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      onHeaderCell: () => ({
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#28272E",
        },
      }),
      render: (user) => <span>{user}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      onHeaderCell: () => ({
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#28272E",
        },
      }),
      render: (amount) => <span>$ {amount}</span>,
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
      onHeaderCell: () => ({
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#28272E",
        },
      }),
      render: (method) =>
        method === "paypal" ? (
          <span className="text-white flex justify-center items-center">
            <IoLogoPaypal style={{ marginRight: 8 }} />
            PayPal
          </span>
        ) : (
          <span className="text-white flex justify-center items-center">
            {" "}
            <BsCurrencyDollar style={{ marginRight: 8 }} />
            Dollar
          </span>
        ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      onHeaderCell: () => ({
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#28272E",
        },
      }),
      render: (status) => (
        <Tag className="rounded-[50px] px-4 py-1 border border-white text-white bg-transparent">
          {status === "success" ? "Pending" : "Pending"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      onHeaderCell: () => ({
        style: {
          textAlign: "center",
          color: "white",
          backgroundColor: "#28272E",
        },
      }),
      render: (_, record) => (
        <div>
          <Button type="default" style={{ marginRight: 8 }}>
            Accept
          </Button>
          <Button danger style={{ backgroundColor: "red", color: "white" }}>
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      user: "sohail",
      amount: 120,
      method: "paypal",
      status: "success",
    },
    {
      key: "2",
      user: "sohail",
      amount: 80,
      method: "dollar",
      status: "failed",
    },
  ];

  return (
    <div className="p-5 bg-[#28272E] w-full rounded-full flex flex-col ">
      <Title style={{ marginBottom: "5px", color: "white" }}>
        Top-up Confirmations
      </Title>
      <Typography className="mb-5 text-white">
        Review and approve client top-up requests
      </Typography>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="border-none"
        onRow={() => ({
          style: {
            backgroundColor: "rgb(40, 39, 46)",
          },
        })}
      />

      <div className="flex justify-center mt-5">
        <Button className="bg-transparent border-none text-white font-bold cursor-pointer">
          View All
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
