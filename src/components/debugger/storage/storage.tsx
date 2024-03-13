import { useState } from "react";
import { Button } from "antd";

const Storage = () => {
  const [localStorageToken, setLocalStorageToken] = useState(
    localStorage.getItem("token") || "无"
  );
  const [sessionStorageToken, setSessionStorageToken] = useState(
    sessionStorage.getItem("token") || "无"
  );

  const handleClearLocalStorage = () => {
    localStorage.removeItem("token");
    setLocalStorageToken("无");
  };

  const handleClearSessionStorage = () => {
    sessionStorage.removeItem("token");
    setSessionStorageToken("无");
  };

  const handleRefresh = () => {
    // 在这里执行获取更新的操作
    // 例如重新获取 localStorage 和 sessionStorage 中的 token
    setLocalStorageToken(
      localStorage.getItem("token") || "无"
    );
    setSessionStorageToken(
      sessionStorage.getItem("token") || "无"
    );
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>localStorage Token:</h3>
        <p>{localStorageToken}</p>
        <Button type="primary" onClick={handleClearLocalStorage}>
          清除localStorage
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h3>sessionStorage Token:</h3>
        <p>{sessionStorageToken}</p>
        <Button type="primary" onClick={handleClearSessionStorage}>
          清除sessionStorage
        </Button>
      </div>
      <div>
        <Button type="primary" onClick={handleRefresh}>
          刷新storage
        </Button>
      </div>
    </>
  );
};

export default Storage;
