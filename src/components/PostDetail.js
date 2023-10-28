// PostDetail.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  return (
    <div>
      <Link to="/">Back to Post List</Link>
      <h1>Post Detail</h1>
      <h3>{post.text}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
