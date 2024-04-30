"use client";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "../firebase/config";

export const AuthContext = createContext();
const auth = getAuth(firebase_app);

const AuthcontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthcontextProvider;
