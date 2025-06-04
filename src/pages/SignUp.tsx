import React, { useState } from 'react';
import { Lock, Mail, UserRoundPlus, User } from 'lucide-react';
import '../styles/SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up was submitted with: ', {username, email, password});
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">
            <UserRoundPlus className="icon" />
          </div>
          <h2 className="signup-title">SignUp</h2>
          <p className="signup-subtitle">Fill in the form to create your account.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <label htmlFor="text" className="sr-only">Username</label>
              <div className="input-icon" id="username-icon">
                <User className="icon" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="Username"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="input-icon" id="mail-icon">
                <Mail className="icon" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Email address"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="input-icon" id="password-icon">
                <Lock className="icon" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-options">
            <div className="checkbox-wrapper">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="checkbox"
              />
              <label htmlFor="terms-and-conditions" className="checkbox-label">
                Do you accept our <Link to="/terms" className="terms-link">Terms and Conditions</Link>?
              </label>
            </div>
          </div>

          <div className="form-action">
            <button
              type="submit"
              className="submit-button"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="signup-link">
          <span className="signup-text">Already have an account? </span>
          <Link to="/Login" className="login-link-text">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;