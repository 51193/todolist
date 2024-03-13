import { Table } from "antd";
import "./sideBar.css";

export default function SideBar() {
  const dataSource = [
    {
      startTime: "9:00",
      connector: "-",
      endTime: "10:00",
      content: "test123123123123123123123123123123123123",
    },
  ];

  const columns = [
    {
      title: "开始时间",
      dataIndex: "startTime",
      key: "startTime",
      width: 50,
    },
    {
      title: "-",
      dataIndex: "connector",
      key: "connector",
      width: 0,
    },
    {
      title: "结束时间",
      dataIndex: "endTime",
      key: "endTime",
      width: 50,
    },
    {
      title: "内容",
      dataIndex: "content",
      key: "content",
      render: (text: string) => (
        <div style={{ textAlign: "center" }}>{text}</div>
      ),
    },
  ];
  return (
    <div className="side-bar">
      <Table
        dataSource={dataSource}
        columns={columns}
        showHeader={false}
        size="small"
      />
    </div>
  );
}
