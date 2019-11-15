importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDaN1tGsGYOzcqFpJ2K12hYHez-HAfQZv4",
  authDomain: "tangish.firebaseapp.com",
  databaseURL: "https://tangish.firebaseio.com",
  projectId: "tangish",
  storageBucket: "tangish.appspot.com",
  messagingSenderId: "1079311031587",
  appId: "1:1079311031587:web:309236d77c174aa2240096"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});
