import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Form, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PerfectScrollbar from "react-perfect-scrollbar";
import Language from "../Header/Language";
import { NavDropdown } from "react-bootstrap";
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
            <span onClick={() => setcollapsed(!collapsed)}>
              <FaBars className="leftside" />
            </span>

            <div className="rightside">
              <Language />
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>

          <div className="admin-main">
            <PerfectScrollbar>
              <Outlet />
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
