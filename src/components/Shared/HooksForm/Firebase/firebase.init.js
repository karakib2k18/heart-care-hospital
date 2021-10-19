import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
const initializeAppAuthenticaiton = () => {
    return initializeApp(firebaseConfig);
};
export default initializeAppAuthenticaiton;