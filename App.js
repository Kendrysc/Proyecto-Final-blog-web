import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Auth from "./components/Auth";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const user = firebase.auth().currentUser;

  return (
    <div>
      <h1>React Firebase Blog</h1>
      {!user ? <Auth /> : <CreatePost />}
      <PostList />
    </div>
  );
};

export default App;
