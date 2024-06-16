import { Link } from "react-router-dom";
import "./SideBar.css";
import "./SideBar.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

import sidebarBg from "../../assets/img-sidebar.jpg";

// import { DiReact } from "react-icons/di";

import { TbBrandRedux } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiAnchor } from "react-icons/bi";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;

  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <TbBrandRedux size={"3em"} color={"00bfff"} />
            <span>Thành Đạt</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<LuLayoutDashboard />}>
              Dashboard
              <Link to="/admins"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<BiAnchor />} title="Features">
              <MenuItem>
                Quản lý User
                <Link to="/admins/manage-users"></Link>
              </MenuItem>
              <MenuItem> Quản lý Bài Quiz</MenuItem>
              <MenuItem> Quản lý Question</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/ThanhDatJava/ThanhProject-ReactApp-demo2"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                ThanhDat's viewSource
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
