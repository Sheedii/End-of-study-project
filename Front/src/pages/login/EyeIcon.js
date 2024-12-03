import React from 'react';

const EyeIcon = ({ togglePasswordVisibility, passwordShown }) => {
  return (
    <label className="container" onClick={togglePasswordVisibility}>
      <input
        type="checkbox"
        checked={passwordShown}
        onChange={() => {}} // Placeholder onChange handler
      />
      {passwordShown ? (
        <svg
          className="eye"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          {/* Your eye icon SVG here */}
        </svg>
      ) : (
        <svg
          className="eye-slash"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
        >
          {/* Your eye-slash icon SVG here */}
        </svg>
      )}
    </label>
  );
};

export default EyeIcon;
