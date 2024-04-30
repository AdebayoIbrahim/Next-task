"use client";
import { useContext, Fragment, useEffect, useState } from "react";
import { AuthContext } from "@/context/Authcontext";
import getAllDocuments from "@/firebase/firestore/getData";
import { useRouter } from "next/navigation";
const Customers = () => {
  const { user } = useContext(AuthContext);
  const [customerArr, setCustomer] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!user || user === null) {
      router.push("/signin");
    }
  }, [user, router]);

  if (!user || user === null) {
    return <h1 className="text-center">Loading...</h1>;
  }
  const collectionName = "Customers";

  useEffect(() => {
    async function fetchDetails() {
      try {
        const { results, error } = await getAllDocuments(collectionName);
        if (error) {
          console.error("Error fetching documents:", error);
        } else {
          console.log("Documents:", results);
          setCustomer(results);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchDetails();
  }, [() => router]);

  return (
    <Fragment>
      <div className="wrapper_data">
        <nav className="bg-[#692d2d] w-full py-4 px-6 flex justify-between items-center sticky top-0">
          <div className="text-white">
            Admin<em>go</em>
          </div>
          <div className="text-white">{user.email || "Admin"}</div>
        </nav>
        <main className="pt-5">
          <div className="text-center font-semibold py-6 text-16px">
            Here are the lists of customers
          </div>
          <div className="table-container">
            {customerArr && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Id Number</th>
                  </tr>
                </thead>
                <tbody>
                  {customerArr.map((c, index) => {
                    return (
                      <tr key={index}>
                        <td>{c.data.name}</td>
                        <td>{c.data.email}</td>
                        <td>{c.data.address}</td>
                        <td>{c.data.identitiy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Customers;
