import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName.trim()) {
      dispatch(login(userName));
      navigate('/home');
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Enter Your Name For Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.loginButton}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '0 20px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#ff4d4d',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  loginButtonHover: {
    backgroundColor: '#e04343',
  },
};

export default LoginPage;
