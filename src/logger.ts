import { doc, updateDoc } from "firebase/firestore"; 
import db from './helpers/firebase';

import notify from './helpers/sendGrid'

const saveResult = async (id: string, success: boolean) => {

  const docRef = doc(db, "tests", id);
  const data = { [Date.now()]: { success }}

  updateDoc(docRef, data);

}

export default {
  success(id: string) {
    saveResult(id, true);
  },
  error(id: string, data?: any) {
    saveResult(id, false);
    notify(id, data);
  },
}
