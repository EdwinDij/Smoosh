import {initializeApp} from "firebase/app"
import firebase from 'firebase/compat/app';
import {getAuth} from "firebase/auth";


//const firebaseApi_key = process.env.REACT_APP_FIREB_KEY;
const firebase_domain= process.env.REACT_APP_DOMAIN;
const firebase_projectId= process.env.REACT_APP_PROJECTID;
const firebase_storage= process.env.REACT_APP_STORAGE;
const firebase_messaging= process.env.REACT_APP_MESSAGING;
const firebase_APPID= process.env.REACT_APP_APPID;

const firebaseConfig = {
apiKey: "AIzaSyAFMJe8KGMKnx9a0z--23z54BgT_lJopXM",
authDomain: firebase_domain,
projectId: firebase_projectId,
storageBucket: firebase_storage,
messagingSenderId: firebase_messaging,
appId: firebase_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
