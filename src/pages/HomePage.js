import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import WeatherDisplay from '../components/WeatherDisplay';
import { logout } from '../redux/authSlice';

const HomePage = () => {
  const userName = useSelector((state) => state.auth?.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate('/');
    }
  }, [userName, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {userName && <h1 style={styles.welcomeMessage}>Welcome, {userName}!</h1>}
        {userName && (
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        )}
        <TaskInput />
        <TaskList />
        <WeatherDisplay />
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
    backgroundColor: '#f0f0f0',
    padding: '0 20px',
    flexDirection: 'column',
  },
  content: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'auto',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginBottom: '20px',
  },
  welcomeMessage: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
};

export default HomePage;
