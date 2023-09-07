import "./App.css";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
