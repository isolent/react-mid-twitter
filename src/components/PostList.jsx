import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Postlist.css";
// PostList.js
import React from 'react';
// PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
