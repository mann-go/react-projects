import { MoonLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <MoonLoader color="#28282B" height={4} width={100} loading={true} />
    </div>
  );
}

export default LoadingSpinner;
