import React, { useState } from 'react';
import '../styles/Registration.css'

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && username && password && sex && email && location) {

      setName('');
      setUsername('');
      setPassword('');
      setSex('');
      setEmail('');
      setLocation('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="registration-page">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex</label>
          <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
