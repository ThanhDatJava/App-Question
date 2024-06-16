import "./Login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    //validate
    //submit apis
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch({
        type: "FETCH_USER_LOGIN_SUCCESS",
        payload: data,
      });
      toast.success(data.EM);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleClickBtnSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="login-container ">
        <div className="header-login">
          <span>If you do not already have an account</span>
          <button
            className="btn btn-primary "
            onClick={() => handleClickBtnSignup()}
          >
            Sign up
          </button>
        </div>
        <div className="form-login col-4">
          <div className="title-login-form">
            <h1>Login</h1>
          </div>
          <div className="body-form">
            <div className="form-control">
              <label>Email : </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label>Password : </label>
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
            <button onClick={() => handleLogin()}> Login to ThanhDat </button>
            <br />
            <label
              onClick={() => {
                navigate("/");
              }}
            >
              Go back home
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
