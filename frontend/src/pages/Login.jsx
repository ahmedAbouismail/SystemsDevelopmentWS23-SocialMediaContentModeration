import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import apiEndpoints from '../apiConfig';

/**
 * LoginInput Component: Represents an input field in the login form.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.type - The type of the input field ('text' or 'password').
 * @param {string} props.label - The label for the input field.
 * @param {string} props.id - The identifier for the input field.
 * @returns {JSX.Element} - JSX for rendering the LoginInput component.
 */
function LoginInput({ type, label, id }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const focusField = (event) => {
    const input = event.target;
    input.classList.toggle('focused', !input.classList.contains('focused'));
  };

  const inputClass = `login-input ${value ? 'login-input-open' : ''}`;

  return (
    <div className={inputClass}>
      <div className='login-input-holder'>
        <input
          className='login-input-input'
          type={type}
          id={id}
          onFocus={focusField}
          onBlur={focusField}
          onChange={handleChange}
          autoComplete='off'
        />
        <label className='login-input-label' htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

/**
 * Login Component: Represents the login page.
 * @param {Object} props - The properties passed to the component.
 * @param {function} props.setAuthenticated - The function to set the authentication state.
 * @returns {JSX.Element} - JSX for rendering the Login component.
 */
function Login({ setAuthenticated }) {
  const [loginError, setLoginError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');

      if (storedToken) {
        setAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      // console.error('Error while checking for token:', error.message);
      UIkit.notification('Error while checking for token');
    }
  }, [navigate, setAuthenticated]);

  const handleLogin = async () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(apiEndpoints.postLogin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        setLoginError(false);
        setAuthenticated(true);
        navigate('/dashboard');
        localStorage.setItem('token', token);

        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }
      } else {
        UIkit.notification('Error while logging in');
        // console.error('Fehler beim Einloggen');
        setLoginError(true);
      }
    } catch (error) {
      UIkit.notification('Network Error');
      // console.error('Netzwerkfehler', error);
    }
  };

  return (
    <div className='uk-container uk-margin-xlarge-top uk-margin-xlarge-bottom'>
      <div data-uk-grid className='uk-flex uk-flex-center'>
        <div className='uk-width-1-2 uk-box-shadow-medium uk-border-rounded uk-background-default uk-padding'>
          <div data-uk-grid className='uk-flex uk-flex-middle'>
            <div className='uk-width-1-2'>
              <div className='title'>
                <h1>Login</h1>
              </div>
              <LoginInput type='text' label='name' id='name' />
              <LoginInput type='password' label='password' id='password' />
              {loginError && (
                <div className='uk-alert-danger' data-uk-alert>
                  <p>Falsches Passwort. Bitte versuchen Sie es erneut.</p>
                </div>
              )}
              <button
                className='uk-button uk-button-primary'
                onClick={handleLogin}
                type='submit'
              >
                Login
              </button>
            </div>
            <div className='uk-width-1-2 '>
              <img
                src='/assets/img/logo/nohatenet-blacklogologo-transparent.png'
                alt='Logo'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Login;
