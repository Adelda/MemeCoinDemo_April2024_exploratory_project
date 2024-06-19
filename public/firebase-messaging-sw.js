importScripts('/firebase-app.js');
importScripts('/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyA6aYOgAscSQe4W0WJgB9Ha0X21WMbyBCw",
  authDomain: "test-4dd75.firebaseapp.com",
  projectId: "test-4dd75",
  storageBucket: "test-4dd75.appspot.com",
  messagingSenderId: "713610534619",
  appId: "1:713610534619:web:73a87ecd45a68fc608f6fe",
  measurementId: "G-517JXC2V10"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
