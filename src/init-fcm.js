import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaN1tGsGYOzcqFpJ2K12hYHez-HAfQZv4",
  authDomain: "tangish.firebaseapp.com",
  databaseURL: "https://tangish.firebaseio.com",
  projectId: "tangish",
  storageBucket: "tangish.appspot.com",
  messagingSenderId: "1079311031587",
  appId: "1:1079311031587:web:309236d77c174aa2240096"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BKtiwfwb4HoYhh_NxWdVWLg08285QJwKiHCmccyg8YXBiq9wnnciXd-K7FXF514lQd6ML3WLjncmxa-5hzM23ok"
);

export { messaging };
