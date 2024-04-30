import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);

export default async function getAllDocuments(collectionName) {
  const collectionRef = collection(db, collectionName);

  let results = [];
  let error = null;

  try {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });
  } catch (e) {
    error = e;
  }

  return { results, error };
}
