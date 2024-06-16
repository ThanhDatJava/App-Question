import "./Signup.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { BiBody } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    //validate
    //submit apis
    let data = await postRegister(email, password, username);
    console.log("check res", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleClickBtnLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="login-container ">
        <div className="header-login">
          <span>Welcom to ThanhDat App</span>
          <button
            className="btn btn-primary "
            onClick={() => handleClickBtnLogin()}
          >
            Log in
          </button>
        </div>
        <div className="form-login col-4">
          <div className="title-login-form">
            <h1>Sign up</h1>
          </div>
          <div className="body-form">
            <div className="content-email-username">
              <div className="form-control">
                <label>
                  Email <MdOutlineEmail /> (*):
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
              <div className="form-control">
                <label>
                  Username <BiBody /> :
                </label>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-control">
              <label>
                Password <TbPasswordUser /> (*):
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="footer-form-login">
            <label className="forgot-password">Forgot password</label>
            <br />
            <button onClick={() => handleSignup()}>
              <SiGnuprivacyguard /> Signup to ThanhDat
            </button>
            <br />
            <label
              onClick={() => {
                navigate("/");
              }}
            >
              <FaHome /> Go back home
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
