import { Button, Collapse } from "antd";
import Storage from "./storage/storage";
import { useState } from "react";

const Debugger = () => {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: collapsed ? "60px" : "200px",
        height: "100%",
        background: "#fff",
        borderLeft: "1px solid #ccc",
        padding: "20px",
        boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        transition: "width 0.3s ease",
      }}
    >
      <Button type="primary" onClick={handleToggleCollapse}>
        {collapsed ? "展开" : "收起"}
      </Button>
      <Collapse defaultActiveKey={["1"]} bordered={false} ghost>
        <Storage />
      </Collapse>
    </div>
  );
};

export default Debugger;
