import {initializeApp} from 'firebase/app';
const firebaseApi_key = process.env.REACT_APP_FIREB_KEY;

const firebaseConfig = {
apiKey: firebaseApi_key,
authDomain: "smoosh-29298.firebaseapp.com",
projectId: "smoosh-29298",
storageBucket: "smoosh-29298.appspot.com",
messagingSenderId: "229704882413",
appId: "1:229704882413:web:38b3e7c78cea78cab954e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);