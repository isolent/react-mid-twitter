import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Profile from './components/Profile';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import "./App.css";

import React, { useEffect, useState } from 'react';
import { fetchPosts } from './mockApi';




function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div id="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post-list" element={<PostList posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
