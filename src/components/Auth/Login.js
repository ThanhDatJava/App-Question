import "./Login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { IoHomeSharp } from "react-icons/io5";
import Language from "../Header/Language";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    //validate
    //submit apis
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };
  const handleClickBtnSignup = () => {
    navigate("/signup");
  };
  const handleKeyDown = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <>
      <div className="login-container ">
        <div className="header-login">
          <span>If you do not already have an account</span>
          <button
            className="btn btn-success "
            onClick={() => handleClickBtnSignup()}
          >
            Sign up
          </button>
          <Language />
        </div>
        <div className="form-login col-4">
          <div className="title-login-form">
            <h1>Login</h1>
          </div>
          <div className="body-form">
            <div className="form-control">
              <label>
                Email <MdOutlineEmail /> :
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label>
                Password <TbPasswordUser /> :
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
              ></input>
            </div>
          </div>
          <div className="footer-form-login">
            <label className="forgot-password">Forgot password</label>
            <br />
            <button onClick={() => handleLogin()} disabled={isLoading}>
              {isLoading === true && (
                <ImSpinner2 className="loader-icon mx-2" />
              )}
              Login to ThanhDat
            </button>
            <br />
            <label
              onClick={() => {
                navigate("/");
              }}
            >
              <IoHomeSharp /> Go back home
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
