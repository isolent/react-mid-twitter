import { Link } from 'react-router-dom';
import './Home.css'
import React, { useEffect, useState } from 'react';
import ApartmentList from './PostList';
import ApartmentDetail from './PostDetail';
import { fetchApartments, fetchApartmentById } from '../mockApi';

function Home() {
  return (
    <div className="home-page">
      <div className="welcome">
        <div className="welcome-block">
          <h1>Twitter na minimalkax</h1>
          <p >It is the website that was made like twitter
          </p>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
