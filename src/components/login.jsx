import React, { useState } from 'react';
import './login.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="toggle-buttons">
          <button 
            className={isLogin ? "active" : ""} 
            onClick={toggleMode}>Login</button>
          <button 
            className={!isLogin ? "active" : ""} 
            onClick={toggleMode}>Sign Up</button>
        </div>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <form className="form">
      <h2>Login</h2>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
};

const Signup = () => {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <div className="input-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div className="input-field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" required />
      </div>
      <button type="submit" className="submit-btn">Sign Up</button>
    </form>
  );
};

export default Auth;
