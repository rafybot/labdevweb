// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHYZY0aNxSPI67GKv9VcBiqvMgRHKvT98",
  authDomain: "projetodevweb-de9db.firebaseapp.com",
  projectId: "projetodevweb-de9db",
  storageBucket: "projetodevweb-de9db.appspot.com",
  messagingSenderId: "691784348230",
  appId: "1:691784348230:web:260c144d3f623da7f81047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export {authentication}