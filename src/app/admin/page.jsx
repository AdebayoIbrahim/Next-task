"use client";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/Authcontext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";

const Admin = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || user === null) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user || user === null) {
    return <h1 className="text-center">Loading...</h1>;
  }
  const [val, setValues] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(val);
    e.preventDefault();
    for (const [key, value] of Object.entries(val)) {
      if (value === undefined || !key || value === "") {
        alert("All fields must be filled");
        return;
      }
    }

    // add to firestore-db

    try {
      const { user, error } = await addData("Customers", "customer_id", val);
      if (error) {
        console.log(error);
        alert(error);
        return;
      } else {
        alert(
          "Customer Added Succesfully!\n\tYou can create another instance or view cutomers"
        );
        console.log(user);
        setValues({});
      }
    } catch (error) {
      console.error("error Occoured");
    }
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        <nav className="bg-[#692d2d] w-full py-4 px-6 flex justify-between items-center sticky top-0">
          <div className="text-white">
            Admin<em>go</em>
          </div>
          <div className="text-white">{user.email || "Admin"}</div>
        </nav>
        <main className=" pt-10 flex items-center flex-col gap-y-1rem  w-full pb-6">
          <h1>welcome Admin!!</h1>
          <p>You can now add Cutomers</p>

          <div className="mt-5 form_wrapper bg-[white] p-[2rem] w-[450px] shadow-lg rounded-md">
            <h2>Customer Details Form</h2>
            <form onSubmit={handleSubmit} className="pt-3">
              <div className="py-1">
                <label htmlFor="name">Name:</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={val.name || ""}
                  onChange={handleChange}
                  placeholder="name"
                />
              </div>

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
                <label htmlFor="address">Address:</label>
                <input
                  type="address"
                  name="address"
                  id="address"
                  value={val.address || ""}
                  onChange={handleChange}
                  placeholder="address"
                />
              </div>
              <div className="py-1">
                <label htmlFor="identitiy">Id Number:</label>
                <input
                  type="identitiy"
                  name="identitiy"
                  id="identitiy"
                  value={val.identitiy || ""}
                  onChange={handleChange}
                  placeholder="identitiy"
                />
              </div>
              <div className="pt-5">
                <input type="submit" value="Add Customer" className="w-full" />
              </div>
            </form>
          </div>
          <div className="pt-3">
            <button
              className="text-white bg-[#4f0da4] rounded-lg w-full py-2 px-7"
              onClick={() => router.push("/admin/customers")}
            >
              Get all Cusomers
            </button>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Admin;
