"use client";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/Authcontext";
import { useRouter } from "next/navigation";

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
      <div>
        <h1>welocme User</h1>
      </div>
    </React.Fragment>
  );
};

export default Admin;
