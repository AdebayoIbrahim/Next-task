"use client";

import { useState } from "react";
import Link from "next/link";
const Signuppage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [val, setValues] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((val) => ({ ...val, [name]: value }));
    console.log(val);
  };
  return (
    <div className="container flex justify-center items-center min-h-[90vh]">
      <div className="form_wrapper bg-[white] p-[2rem] w-[350px] shadow-lg rounded-md">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="pt-3">
          <div className="py-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={val.email || ""}
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div className="py-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={val.password || ""}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          {/* confirm-password */}
          <div className="py-1">
            <label htmlFor="cfpassword">Confirm Password:</label>
            <input
              type="password"
              name="cfpassword"
              id="cfpassword"
              value={val.cfpassword || ""}
              onChange={handleChange}
              placeholder="confirm password"
            />
          </div>
          <div className="pt-5">
            <input type="submit" value="Sign Up" className="w-full" />
          </div>
        </form>
        <div className="pt-4 text-[16px]">
          Already have an account ?{" "}
          <Link href="/signin" className="text-[#9e2121]">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
