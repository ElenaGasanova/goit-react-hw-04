import { Hearts } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Hearts
        height="80"
        width="80"
        color="red"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
