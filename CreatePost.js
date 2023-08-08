import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    const newPostRef = firebase.database().ref("posts").push();
    await newPostRef.set({
      title,
      content,
    });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
