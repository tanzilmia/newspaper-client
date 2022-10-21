// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkHgWX744v8iHxgocCHOf_xaxnV0-Q1zE",
  authDomain: "news-paper-app-bb577.firebaseapp.com",
  projectId: "news-paper-app-bb577",
  storageBucket: "news-paper-app-bb577.appspot.com",
  messagingSenderId: "441522840167",
  appId: "1:441522840167:web:48312f6846314ba1c56ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app