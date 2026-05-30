// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Agrotec Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD9C6d6QocJ-zvhlWxBZgF1Bxdv7lWIsOo",
  authDomain: "agrotec-project.firebaseapp.com",
  projectId: "agrotec-project",
  storageBucket: "agrotec-project.firebasestorage.app",
  messagingSenderId: "679211092379",
  appId: "1:679211092379:web:2454dff96057583886b93e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Export all for usage
export {
  db,
  storage,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc
};