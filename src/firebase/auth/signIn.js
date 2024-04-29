import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

const Signin = async (email, password) => {
  let result = null,
    error = null;

  try {
    result = signInWithEmailAndPassword(auth, email, password);
  } catch (errors) {
    error = errors;
  }

  return result, error;
};

export default Signin;
