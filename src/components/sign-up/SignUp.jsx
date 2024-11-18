import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow-lg" style={{ width: "420px" }}>
        <h4 className="fw-bold text-center mb-3">Create Your Account</h4>
        <p className="text-center text-muted mb-4">
          Join FreshCart today and enjoy fresh products delivered to your doorstep.
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Name"
          />
          
        </div>
        <div className="mb-3">
           <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Second Name"
          />
          </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control form-control-sm"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary w-100">Sign Up</button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="text-decoration-none text-primary fw-bold" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
