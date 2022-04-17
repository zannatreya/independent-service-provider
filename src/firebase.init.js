// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp4ASisacXjBTDDpuxUMhgXl51VnoSV0c",
    authDomain: "individual-service-provider.firebaseapp.com",
    projectId: "individual-service-provider",
    storageBucket: "individual-service-provider.appspot.com",
    messagingSenderId: "896897202504",
    appId: "1:896897202504:web:948f34966cb9fe08565b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;