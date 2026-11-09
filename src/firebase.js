import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbCfzPCjwZ7ji2Hj4pU_CgCjxinhmIp3I",
  authDomain: "login-224cf.firebaseapp.com",
  projectId: "login-224cf",
  storageBucket: "login-224cf.firebasestorage.app",
  messagingSenderId: "372741643914",
  appId: "1:372741643914:web:1606aa50142af86dc09773",
  measurementId: "G-12DJYZP0D8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();