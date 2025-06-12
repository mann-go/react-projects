import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
