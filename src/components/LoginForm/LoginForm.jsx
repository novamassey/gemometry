
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label className="LoginLabel">Email</label>
          <input className="LoginInput" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className="LoginLabel">Password</label>
          <input className="LoginInput" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className="LoginButton" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}