import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../apiConfig';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: '',
    };
  }

  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused,
    });
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value,
    });
  }

  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = 'login-input';
    if (focused) {
      inputClass += ' login-input-focus';
    } else if (value !== '') {
      inputClass += ' login-input-open';
    }

    return (
      <div className={inputClass} style={style}>
        <div className='login-input-holder'>
          <input
            className='login-input-input'
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoComplete='off'
          />
          <label className='login-input-label' htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    );
  }
}

const Login = ({ setAuthenticated, history, setRememberMe }) => {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [rememberMe, setLocalRememberMe] = useState(false);
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');

      if (storedToken) {
        setAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error while checking for token:', error.message);
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
        const token = response.json().then((data) => data.token);
        // Erfolgreich eingeloggt
        setLoginError(false);
        setAuthenticated(true);
        navigate('/dashboard');
        // Save token to localStorage
        localStorage.setItem('token', token);
        // Save rememberMe status to localStorage
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }
      } else {
        console.error('Fehler beim Einloggen');
        setLoginError(true);
      }
    } catch (error) {
      console.error('Netzwerkfehler', error);
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
};

export default Login;
