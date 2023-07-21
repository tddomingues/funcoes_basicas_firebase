import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUpdateDocument = (documentName, id) => {

  const updateDocument = async (info) => {
    try {
      const refDoc = doc(db, documentName, id);
      await updateDoc(refDoc, info);
    } catch (error) {
      console.log(error);
    }
  };

  return { updateDocument };
};
