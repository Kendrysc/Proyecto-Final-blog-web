import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firebase.database().ref("posts").once("value");
      const postsData = snapshot.val();
      if (postsData) {
        setPosts(Object.values(postsData));
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
