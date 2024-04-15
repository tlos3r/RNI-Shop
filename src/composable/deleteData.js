import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export async function useDeleteData(collectionRef, idArray) {
  for (const id of idArray) {
    const docRef = doc(db, `${collectionRef}`, `${id}`)
    await deleteDoc(docRef)
  }
}
