"use client";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/Authcontext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
const Admin = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || user === null) {
      router.push("/signin");
    }
  }, [user]);

  if (!user || user === null) {
    return <h1 className="text-center">Loading...</h1>;
  }
  return (
    <React.Fragment>
      <div className="wrapper">
        <nav className="bg-[firebrick] w-full py-4 px-6 flex justify-between items-center">
          <div>
            Admin<em>go</em>
          </div>
          <div>{user.email || "Admin"}</div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Admin;
