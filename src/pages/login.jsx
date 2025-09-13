import React, { useState } from 'react';
import { loginUser } from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log('Login successful:', data);
      // Redirect or update UI after login
    } catch (error) {
      console.error('Login failed:', error.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
