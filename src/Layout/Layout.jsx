import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
 

const Layout = () => {
  return (
    <div className="font-barlow">
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Layout;
