import { useEffect, useState } from "react";
import "./timeDisplayer.css";

export default function TimeDisplayer() {
  // 使用 useState 来存储当前日期和时间的状态
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // 使用 useEffect 来更新当前日期和时间
  useEffect(() => {
    // 定义一个函数来更新当前日期和时间的状态
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    // 每秒钟更新一次当前日期和时间
    const intervalId = setInterval(updateDateTime, 100);

    // 返回清除定时器的函数，确保在组件卸载时清除定时器
    return () => clearInterval(intervalId);
  }, []); // 这里传入空数组作为依赖项，确保 useEffect 仅在组件挂载时执行一次

  // 格式化当前日期和时间
  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div style={{ textAlign: "center" }}>
      <p>{formattedDateTime}</p>
    </div>
  );
}
