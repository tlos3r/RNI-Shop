import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

export async function useAddData(collectionRef, data) {
  const docRef = await addDoc(collection(db, `${collectionRef}`), data)
  return { docRef }
}
