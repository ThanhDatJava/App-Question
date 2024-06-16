import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Form, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Admin = (props) => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <SideBar collapsed={collapsed} />
        </div>
        <div className="admin-content">
          <div className="admin-header">
            <FaBars onClick={() => setcollapsed(!collapsed)} />
          </div>
          <div className="admin-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
