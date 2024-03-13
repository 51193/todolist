import "./test.css";

import axios from "axios";
import { useState } from "react";

export default function Test() {
  document.title = "测试";

  const [msg, setMsg] = useState<String>("");
  try {
    axios.post("/user/test").then((response) => {
      console.log(response.data["msg"]);
      setMsg(response.data["msg"]);
    });
  } catch (error) {
    console.error("Error:", error);
    setMsg("Error");
  }
  return <div className="message">{msg}</div>;
}
