import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

export async function useDetailData(collectionRef, id) {
  const docRef = doc(db, `${collectionRef}`, `${id}`)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data()
    return { data }
  } else {
    console.error(`Don't have any document!`)
  }
}
