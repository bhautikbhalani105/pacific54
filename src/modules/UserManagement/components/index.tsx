import React from "react";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../utils/constants/routes";

import DeleteModal from "../../../components/common/Modal/DeleteModal";
import { CommonTable } from "../../../components/common/Table";
import { usersManagementData } from "../../../components/common/Table/dummyData";
import { Button } from "antd";

const UserManagementTable = () => {
  const navigate = useNavigate();

  const handleDeleteModal = React.useCallback(async (id: number) => {
    console.log("User Id Is", id);
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Index",
      dataIndex: "rowId",
      key: "rowId",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      dataIndex: "userName",
      title: "User Name",
      key: "userName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Last Used",
      dataIndex: "last_used",
      key: "last_used",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      className: "text-center",
      render: (_, record: any) => (
        <>
          <Button
            type="link"
            size="small"
            className="cta_btn table_cta_btn"
            icon={<EyeOutlined />}
            onClick={() => navigate(`${ROUTES.userView}/${record?.rowId}`)}
          />
          <Button
            type="link"
            size="small"
            className="cta_btn table_cta_btn"
            icon={<EditOutlined />}
            onClick={() => navigate(`${ROUTES.userEdit}/${record?.rowId}`)}
          />
          <Button
            type="link"
            size="small"
            className="cta_btn table_cta_btn"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteModal(record?.rowId)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <CommonTable
        bordered
        columns={columns}
        dataSource={
          Array.isArray(usersManagementData) && usersManagementData.length > 0
            ? usersManagementData.map((item) => ({ ...item, key: item.rowId }))
            : []
        }
      />
      <DeleteModal />
    </>
  );
};

export default UserManagementTable;
