// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBH3ZYaNsQgn0pg1jDwRefNUlYpAFUfzVw",
  authDomain: "vocalgenx-bhoomika.firebaseapp.com",
  projectId: "vocalgenx-bhoomika",
  storageBucket: "vocalgenx-bhoomika.firebasestorage.app",
  messagingSenderId: "707314041679",
  appId: "1:707314041679:web:3a22443fe6f8fe46e57b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Google Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase Functions
export const functions = getFunctions(app);

// Cloud Function to send email notification
export const sendEmailNotification = httpsCallable(functions, 'sendEmailNotification');

export default app;
