
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBfEpYFToInn5LlFLQ6uZujSKBSOitkLw",
  authDomain: "land-listings-6e690.firebaseapp.com",
  projectId: "land-listings-6e690",
  storageBucket: "land-listings-6e690.appspot.com",
  messagingSenderId: "419587035600",
  appId: "1:419587035600:web:3c400e0c3a8dada915e9d5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth