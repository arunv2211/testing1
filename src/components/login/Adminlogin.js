import React from "react";

const Adminlogin = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary  ">
      <div className="40-w p-5 rounded bg-white">
        <form>
          <h3 className="text-center mb-3">Login</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            ></input>
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            ></input>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
