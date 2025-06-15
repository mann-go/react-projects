import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/reusable/nav/Navbar";
import Footer from "./components/reusable/footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
