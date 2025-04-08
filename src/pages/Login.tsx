import React, { useState } from 'react';
import { Lock, Mail, LogIn } from 'lucide-react';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <LogIn className="icon" />
          </div>
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="input-icon">
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
              <label htmlFor="remember-me" className="checkbox-label">
                Remember me
              </label>
            </div>

            <div className="forgot-password">
              <a href="#" className="forgot-password-link">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="form-action">
            <button
              type="submit"
              className="submit-button"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="signup-link">
          <span className="signup-text">Don't have an account? </span>
          <a href="#" className="signup-link-text">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;