import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useDeleteDocument = (documentName) => {
  const deleteDocument = async (id) => {
    try {
      const refCollection = doc(db, documentName, id);
      await deleteDoc(refCollection);
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteDocument };
};
