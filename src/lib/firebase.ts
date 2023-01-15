import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbYkgGUdIiDnxRh7k3TNNQcknrEuT2uY4",
    authDomain: "react-native-delivery-68252.firebaseapp.com",
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: "react-native-delivery-68252",
    storageBucket: "react-native-delivery-68252.appspot.com",
    messagingSenderId: "109539230155",
    appId: "1:109539230155:web:d999cf4bea72247c06f64e",
    measurementId: "G-537V52Z70M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };