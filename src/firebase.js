import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT0_BVmVp45AzYuMMOgTiyMInb-ye_cuc",
  authDomain: "fir-login-tutorial-f70ee.firebaseapp.com",
  projectId: "fir-login-tutorial-f70ee",
  storageBucket: "fir-login-tutorial-f70ee.appspot.com",
  messagingSenderId: "601797673139",
  appId: "1:601797673139:web:98d13757dfd2b7247570c6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
