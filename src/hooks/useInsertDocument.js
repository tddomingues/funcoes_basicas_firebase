import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useInsertDocument = (documentName) => {
    const insertDocument = async (info) => {
        const refCollection = collection(db, documentName)
        try {
            await addDoc(refCollection, info)
        } catch (error) {
            console.log(error)
        }
    }

    return {insertDocument}
}