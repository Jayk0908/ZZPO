import React, { useState } from 'react';
import './App.css';
import submitIcon from './images/send-svgrepo-com.svg';
import firebaseConfig from './config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useCookies } from 'react-cookie';
import CookieConsent from 'react-cookie-consent';

function MyPage() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['emailSubmitted']);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const handleButtonClick = () => {
    setShowEmailInput(true);
    setEmailSubmitted(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    setShowEmailInput(false);
    setEmailSubmitted(true);
    setCookie('emailSubmitted', true);

    // Add email to Firebase
    const dbRef = firebase.database().ref();
    const emailRef = dbRef.child('emails');
    emailRef.push(email);
  };

  return (
    
    <div className="button-container">
      {showEmailInput ? (
        <form className="email-form" onSubmit={handleEmailSubmit}>
          <input
            className={emailError ? 'email-form-input error' : 'email-form-input'}
            type="email"
            placeholder={emailError ? 'Vul je emailadres in' : 'Vul je emailadres in'}
            value={email}
            onChange={handleEmailChange}
            onBlur={(e) => {
              if (e.target.value === '') {
                e.target.classList.add('error');
                e.target.placeholder = 'Vul je emailadres in';
              }
            }}
          />
          <button className="submit-button" type="submit">
            <img src={submitIcon} alt="Submit" width="79" height="70" border-style="none" />
          </button>
        </form>
      ) : (
        <button className="my-button" onClick={handleButtonClick}>
          {cookies.emailSubmitted ? (
            <p className="email-submitted">Jouw emailadres is naar ons verstuurd!</p>
          ) : (
            'Schrijf mijn bedrijf in'
          )}
        </button>
      )}
    </div>
  );
}

export default MyPage;
