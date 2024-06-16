import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
// import TableUser from "./TableUser";

import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserWithPagiinate,
} from "../../../services/apiServices";

import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import ModalViewUser from "./ModalViewUser";

const ManageUser = (props) => {
  const LIMIT_USER = 7;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModalCreaterUser, setShowModalCreateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});

  const [listUsers, setListUsers] = useState([]);

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  //componentDiMount
  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPagiinate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
    console.log("check data", user);
  };
  const handleClickBtnUpdata = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateData = () => {
    // setShowModalDeleteUser(true);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  return (
    <>
      <div className="manage-user-container">
        <div className="title"> ManageUser</div>
        <div className="users-content">
          <div className="btn-add-new">
            <button
              className="btn btn-primary"
              onClick={() => setShowModalCreateUser(true)}
            >
              <FcPlus /> Add new users
            </button>
          </div>
          <div className="table-users-container">
            {/* <TableUser
              listUsers={listUsers}
              handleClickBtnUpdata={handleClickBtnUpdata}
              handleClickBtnDelete={handleClickBtnDelete}
            /> */}
            <TableUserPaginate
              listUsers={listUsers}
              handleClickBtnView={handleClickBtnView}
              handleClickBtnUpdata={handleClickBtnUpdata}
              handleClickBtnDelete={handleClickBtnDelete}
              fetchListUsersWithPaginate={fetchListUsersWithPaginate}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <ModalCreateUser
            show={showModalCreaterUser}
            setShow={setShowModalCreateUser}
            fetchListUsers={fetchListUsers}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ModalViewUser
            show={showModalViewUser}
            setShow={setShowModalViewUser}
            dataView={dataView}
          />
          <ModalUpdateUser
            show={showModalUpdateUser}
            setShow={setShowModalUpdateUser}
            dataUpdate={dataUpdate}
            fetchListUsers={fetchListUsers}
            resetUpdateData={resetUpdateData}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ModalDeleteUser
            show={showModalDeleteUser}
            setShow={setShowModalDeleteUser}
            dataDelete={dataDelete}
            fetchListUsers={fetchListUsers}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default ManageUser;
