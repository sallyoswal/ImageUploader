import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3GUMZCFFCvDaGsPOI10aZp-PXk0XZVC8",
  authDomain: "imageuploader-2c48f.firebaseapp.com",
  projectId: "imageuploader-2c48f",
  storageBucket: "imageuploader-2c48f.appspot.com",
  messagingSenderId: "180125225837",
  appId: "1:180125225837:web:a6f8c71926ac5be1d5c064",
  measurementId: "G-3LYT5R4XPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);