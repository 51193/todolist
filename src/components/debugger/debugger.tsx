import Storage from "./storage/storage";

const Debugger = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "200px",
        height: "100%",
        background: "#fff",
        borderLeft: "1px solid #ccc",
        padding: "20px",
        boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
      }}
    >
      <Storage />
    </div>
  );
};

export default Debugger;
