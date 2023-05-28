import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductData from '../Data/ProductData';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Check username and password
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(false);
    } else if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const [review, setReview] = useState(ProductData);
  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };
  const deleteFeedback = id => {
   if (window.confirm('Are you sure you want to delete?')) {
    setReview(review.filter(item => item.id !== id));
    }
 };

  return (
    <div className="Container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome {isAdmin ? 'Admin' : 'User'}</h1>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className='form' onSubmit={handleLogin}>
          <label>
            Username:
            <input className='input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Authentication;
