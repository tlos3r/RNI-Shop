import { db } from '@/firebase'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { ref } from 'vue'

export async function useFetchCollection(collectionRef) {
  const loading = ref(false)
  const data = ref([])
  const error = ref()
  loading.value = true
  try {
    const docRef = collection(db, collectionRef)
    const q = query(docRef, orderBy('createdAt', 'desc'))
    const dataCollection = await getDocs(q)
    dataCollection.forEach((doc) => {
      data.value.push({ ...doc.data(), id: doc.id })
    })
    loading.value = false
  } catch (e) {
    error.value = e.message
    loading.value = false
  }
  return { data, loading, error }
}
