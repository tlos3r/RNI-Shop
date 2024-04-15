import { db } from '@/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export async function useUpdateData(collectionRef, id, data) {
  const docRef = doc(db, `${collectionRef}`, `${id}`)
  await updateDoc(docRef, data)
  return { docRef }
}
