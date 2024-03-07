import { useState } from "react";
import { Button } from "antd";

const Storage = () => {
  const [localStorageToken, setLocalStorageToken] = useState(
    localStorage.getItem("token") || "No token in localStorage"
  );
  const [sessionStorageToken, setSessionStorageToken] = useState(
    sessionStorage.getItem("token") || "No token in sessionStorage"
  );

  const handleClearLocalStorage = () => {
    localStorage.removeItem("token");
    setLocalStorageToken("No token in localStorage");
  };

  const handleClearSessionStorage = () => {
    sessionStorage.removeItem("token");
    setSessionStorageToken("No token in sessionStorage");
  };

  const handleRefresh = () => {
    // 在这里执行获取更新的操作
    // 例如重新获取 localStorage 和 sessionStorage 中的 token
    setLocalStorageToken(
      localStorage.getItem("token") || "No token in localStorage"
    );
    setSessionStorageToken(
      sessionStorage.getItem("token") || "No token in sessionStorage"
    );
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>localStorage Token:</h3>
        <p>{localStorageToken}</p>
        <Button type="primary" onClick={handleClearLocalStorage}>
          Clear localStorage
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h3>sessionStorage Token:</h3>
        <p>{sessionStorageToken}</p>
        <Button type="primary" onClick={handleClearSessionStorage}>
          Clear sessionStorage
        </Button>
      </div>
      <div>
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
    </>
  );
};

export default Storage;
