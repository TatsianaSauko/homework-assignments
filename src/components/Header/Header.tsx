import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.css';
import { RootState } from '../../redux/configure-store';
import { logout } from '../../redux/slices/authSlice';

export const Header: React.FC = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  return (
    <div className='header'>
      {email ? (
        <button onClick={handleLogout} className='button-auth'>Logout</button>
      ) : (
        <button onClick={handleLogin} className='button-auth'>Login</button>
      )}
    </div>
  );
};

