import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsLoggedIn(!!email);
  }, []);

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    navigate('/auth');
  };

  return (
    <div className='header'>
      {isLoggedIn ? (
        <button onClick={handleLogout} className='button-auth'>Logout</button>
      ) : (
        <button onClick={handleLogin} className='button-auth'>Login</button>
      )}
    </div>
  );
};

