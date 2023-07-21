import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

export const useGetDocument = (documentName, id) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const loadingDoc = async () => {
      try {
        const refDoc = doc(db, documentName, id);
        const getDocument = await getDoc(refDoc);
        setDocument(getDocument.data());
      } catch (error) {}
    };

    loadingDoc();
  }, [id, documentName]);

  return { document };
};
