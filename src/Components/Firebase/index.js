// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  OAuthProvider,
} from 'firebase/auth';
import {initializeAppCheck, ReCaptchaV3Provider} from 'firebase/app-check'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID;
}; */
const firebaseConfig = {
  apiKey: "AIzaSyDmP1MoBrOQ_hl8b5kfNzRvDj6ZcbCaXPk",
  authDomain: "auth-e94a4.firebaseapp.com",
  projectId: "auth-e94a4",
  storageBucket: "auth-e94a4.appspot.com",
  messagingSenderId: "242561975135",
  appId: "1:242561975135:web:095f72cbf0013a9fa0acea",
  measurementId: "G-2RDSGFB1LL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ldwn8MjAAAAAKIVg020KyE9kXvyeI1GEDgHZFgE"),
  isTokenAutoRefreshEnabled: true,
});
export { analytics, auth, provider, signInWithPopup, signOut, OAuthProvider, onAuthStateChanged };

