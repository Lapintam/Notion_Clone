import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDboH2Nx6Z_TnL_GWxCbN7YN_Zx1anUdVE",
  authDomain: "notion-clone-eb2a4.firebaseapp.com",
  projectId: "notion-clone-eb2a4",
  storageBucket: "notion-clone-eb2a4.firebasestorage.app",
  messagingSenderId: "177185631808",
  appId: "1:177185631808:web:a50354f1ea23246725f9a5"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };