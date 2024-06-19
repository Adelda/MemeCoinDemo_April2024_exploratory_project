import { initializeApp } from '/firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Remplacez par la configuration de votre projet Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA6aYOgAscSQe4W0WJgB9Ha0X21WMbyBCw",
    authDomain: "test-4dd75.firebaseapp.com",
    projectId: "test-4dd75",
    storageBucket: "test-4dd75.appspot.com",
    messagingSenderId: "713610534619",
    appId: "1:713610534619:web:73a87ecd45a68fc608f6fe",
    measurementId: "G-517JXC2V10"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase Cloud Messaging et obtenir une référence au service
const messaging = getMessaging(app);

// Exporter l'objet messaging pour une utilisation dans d'autres scripts
export { messaging };
