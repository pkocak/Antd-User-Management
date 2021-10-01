import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        position: "fixed",
        zIndex: 1051,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000080",
      }}
    >
      <Spin />
    </div>
  );
};

export default Loader;
