import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PostList.css";

function PostList({ posts }) {
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="post-list">
      <h2>List of posts for rent</h2>
      <label>
        Posts:
        <select >
          <option value="all">All</option>
        </select>
      </label>

      <br />
      <label>
        <input
          type="text"
          value={searchText}
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <div key={posts.id} className="posts-card">
              <Link to={`/posts/${posts.id}`}>
                <img src={posts.image} alt={posts.name} />
              </Link>
              <h3>{posts.name}</h3>
              <Link to={`/posts/${posts.id}`}>More</Link>
            </div>
    </div>
  );
}

export default PostList;