import { serverTimestamp } from "firebase/firestore";

await addDoc(collection(db, "fish"), {
  category: fishName,
  image: imageUrl,
  createdAt: serverTimestamp()   // ⭐ MUST ADD THIS
});
