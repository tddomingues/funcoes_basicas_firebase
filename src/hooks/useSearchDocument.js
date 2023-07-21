import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

export const useSearchDocument = (documentName) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const refCollection = collection(db, documentName);
    const q = query(refCollection);
    try {
      onSnapshot(q, (querySnapshot) => {
        const newDocument = [];
        querySnapshot.docs.forEach((doc) => {
          newDocument.push({ id: doc.id, ...doc.data() });
        });
        setDocument(newDocument);
      });
    } catch (error) {
      console.log(error);
    }
  }, [documentName]);

  return { document };
};
