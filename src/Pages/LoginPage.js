import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/actions';
import './LoginPage.css'; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const Navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'umesh' && password === 'umesh') {
      dispatch(loginSuccess());
      Navigate('/header')
      Navigate('/dashboard');
    } else {
      alert('Invalid Username or Password');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/Header" />;
  }

  return (
    <div className='login-page'>
      <div className='login-box'>
        <h1>LinkedIn</h1>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
