"use client";

import { useState } from "react";
import Link from "next/link";
const Signinpage = () => {
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
    <div className="container flex justify-center items-center min-h-[80vh]">
      <div className="form_wrapper bg-[white] p-[2rem] w-[320px] shadow-lg rounded-md">
        <h2>Sign In To Enjoy</h2>
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
          <div className="pt-5">
            <input type="submit" value="Sign In" className="w-full" />
          </div>
        </form>
        <div className="pt-4 text-[16px]">
          Don't have an account ?{" "}
          <Link href="/signup" className="text-[#9e2121]">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;