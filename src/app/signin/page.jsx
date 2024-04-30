"use client";

import { useState } from "react";
import Link from "next/link";
import Signin from "../../firebase/auth/signIn";
import { useRouter } from "next/navigation";

const Signinpage = () => {
  const router = useRouter();
  const [val, setValues] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((val) => ({ ...val, [name]: value }));
  };

  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (val.email === undefined || val.password === undefined) {
      alert("fileds cannot be empty");
      return;
    }
    try {
      const { user, error } = await Signin(val.email, val.password);
      if (error) {
        console.log(error);
        alert("login error");
      } else {
        console.log("Sign-in successful:", user);
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  return (
    <div className="container flex justify-center items-center min-h-[100vh]">
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
          Don&apos;t have an account ?
          <Link href="/signup" className="text-[#9e2121]">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
