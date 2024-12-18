import React, { useState } from "react";

function ShowAndHidePassword() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="input-group my-4 mx-4">
          <input
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            className="form-control"
            placeholder="Password"
          />
          <div className="input-group-btn">
            <button className="btn btn-outline-primary" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowAndHidePassword;
