import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import type { FirebaseOptions } from "firebase/app";
import App from "./App.tsx";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA9xw37UVwsRneVNZSk5X1NHjOkxyHmhSU",
  authDomain: "karaoke-queuer.firebaseapp.com",
  projectId: "karaoke-queuer",
  storageBucket: "karaoke-queuer.appspot.com",
  messagingSenderId: "1029469939943",
  appId: "1:1029469939943:web:34df355ab2ac8acef7da42",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
