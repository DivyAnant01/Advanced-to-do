import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            dispatch(login(username));
            navigate('/');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
