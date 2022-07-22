import {initializeApp} from 'firebase/app';
const firebaseApi_key = process.env.REACT_APP_FIREB_KEY;
const firebase_domain= process.env.REACT_APP_DOMAIN;
const firebase_projectId= process.env.REACT_APP_PROJECTID;
const firebase_storage= process.env.REACT_APP_STORAGE;
const firebase_messaging= process.env.REACT_APP_MESSAGING;
const firebase_APPID= process.env.REACT_APP_APPID;

const firebaseConfig = {
apiKey: firebaseApi_key,
authDomain: firebase_domain,
projectId: firebase_projectId,
storageBucket: firebase_storage,
messagingSenderId: firebase_messaging,
appId: firebase_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);