import { PulseLoader } from "react-spinners";

export default function LoadingSpinner() {
  const override = {
    position: "absolute",
    top: "calc(100vh - 52%",
    left: "calc(100vw - 55%",

  };

  return (
    <div className="loading-component-container">
      <PulseLoader
        color="#535bf2"
        cssOverride={override}
        size={30}
        speedMultiplier={0.75}
      />
      </div>

  );
}
