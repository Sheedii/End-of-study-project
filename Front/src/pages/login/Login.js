import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // You might need to install axios: npm install axios
import "./Login.css";
import EyeIcon from "./EyeIcon"; // Import your EyeIcon component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MaskGroup from "./../../assets/Maskgroup.svg";
import Intersect from "./../../assets/Intersect.svg";
import Logo from "./../../assets/logowisecopy2.svg"
import Ellipse25 from "./../../assets/Ellipse25.svg"
import Ellipse24 from "./../../assets/Ellipse24.svg"

class LoginDTO {
  constructor(username, password, rememberMe) { // Add rememberMe here
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

}
class ForgotPasswordDTO {
  constructor(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }
}
const Login = () => {
  const [yourEmailTextValue, setYourEmailTextValue] = useState("");
  const [yourPasswordTextValue, setYourPasswordTextValue] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    console.log("Before toggle:", passwordShown);
    setPasswordShown(!passwordShown);
    console.log("After toggle:", passwordShown);
  };
  
  


  const handleTermsAndConditionsClick = () => {
    navigate("/terms-and-conditions");
  };
  
  

  
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const loginDTO = {
      username: yourEmailTextValue,
      password: yourPasswordTextValue,
    };
  
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", loginDTO);
  
      if (response && response.status === 200) {
        console.log("Login successful");
        
        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        // Wait for 3 seconds before navigating
        setTimeout(() => {
          navigate("/TimeLine");
        }, 2000); // 3000 milliseconds = 3 seconds
        
      } else {
        console.error("Unexpected response format:", response);
        toast.error("Unexpected response received from authentication service.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      let errorMessage = "An unknown error occurred during login.";
  
      if (error.response) {
        errorMessage = error.response.data.message || "Please check your credentials!";
      }
  
      console.error("Login failed:", errorMessage);
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleForgotPassword = async () => {
    const forgotPasswordDTO = new ForgotPasswordDTO(yourEmailTextValue);
    try {
      const response = await axios.post("http://localhost:8080/api/auth/forgot-password", forgotPasswordDTO);
      console.log("Password reset email sent:", response.data);
    } catch (error) {
      console.error("Failed to send password reset email:", error.response?.data || error.message);
    }
  };

  


  return (
    <div className="login">
      <img className="elipse24" src={Ellipse24}/>

        <ToastContainer />


      <div className="terms-conditions" style={{ cursor: "pointer" }} onClick={handleTermsAndConditionsClick}>
      Terms & Conditions
    </div>
      <img
        className="login-illustration-2-1"
        alt=""
        src="/login-illustration-2-1@2x.png"
      />

      <div className="rectangle-parent">




        <div className="logofwhite-1-wrapper">
          <img
            className="logofwhite-1-icon"
            loading="eager"
            alt=""
            src={Logo}
          />
        </div>
        <div className="frame-item" >
            <img className="login-illustration-2-2" loading="eager" alt="" src={Intersect}/>
            <img className="mask" src={MaskGroup}/>
            <img className="elipse25" src={Ellipse25}/>
        </div>
      </div>
      <form className="login-section">

        <div className="login-section-child" />


        <div className="f-r-a-m-e-email-parent">


          <div className="f-r-a-m-e-email">
            <div className="f-r-a-m-e-password">

              <div className="welcomeback">Welcome Back</div>

              <div className="welcomeback1">Signin to your account</div>
              <div className="welcomeback2">New User? <span className="book-demo">book a demo</span></div>


            </div>


          </div>
          <div className="f-r-a-m-e-email">
            <div className="f-r-a-m-e-password">

              <div className="email">Email</div>
            </div>
            <div className="outlined-text-fieldinactive">
              <div className="rectangle" />
              <input
              id="email"
                className="your-email"
                name="email"
                placeholder="Your email"
                type="text"
                value={yourEmailTextValue}
                onChange={(event) => setYourEmailTextValue(event.target.value)}
              />
            </div>
          </div>
          <div className="f-r-a-m-e-email">
            <div className="password-wrapper">
              <div className="password">Password</div>
            </div>
            <div className="outlined-text-fieldinactive1">
              <div className="rectangle" />
              <input
              id="password"
  className="your-email"
  placeholder="Your password"
  name="password"
  type={passwordShown ? "text" : "password"}
  value={yourPasswordTextValue}
  onChange={(event) => setYourPasswordTextValue(event.target.value)}
/>
<EyeIcon togglePasswordVisibility={togglePasswordVisibility} passwordShown={passwordShown} />

                <div className="login-icons">
    <label className="container" onClick={togglePasswordVisibility}>
      <input type="checkbox" checked="toggle-checkbox" />
      {passwordShown ? (
        <svg
          className="eye"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
        </svg>
      ) : (
        <svg
          className="eye-slash"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
        >
          <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path>
        </svg>
      )}
    </label>
  </div>

            </div>
          </div>
          <div className="knob-icon-frame">
            <div className="switcher-parent">
              <div className="switcher">
                <label>
                  <input type="checkbox" className="toggle-checkbox" />
                  <div className="toggle-switch"></div>
                </label>
              </div>
              <div className="description">Remember me</div>
            </div>
            <a className="forgot-password-link" style={{ color: "#8F4444", cursor: "pointer",fontFamily:"Hanken Grotesk-Semi Bold\", sans-serif;"}} onClick={handleForgotPassword}>
              Forgot password?
            </a>
          </div>
        </div>
        <div className="frame-description">
          <div className="login-text">
            <button className="login2" onClick={handleLogin}>
              <div className="login-child" />
              <div className="login-item" />
              <div className="login3">Login</div>
            </button>
          </div>
          <div className="line-divider" />
          <div className="terms-ag  reement">
            <div className="by-loging-in-container">
              <span className="by-loging-in">{`By loging in you are agreeing to our `} </span>
              <b className="terms-conditions1" style={{ cursor: "pointer" }} onClick={() => navigate("/terms-and-conditions")}>
          {'Terms & Conditions'}
            </b>

            </div>
            <span className="all-rights-reserved">Copyright ©2024 All rights reserved.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;