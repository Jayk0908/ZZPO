import React, { useState } from 'react';
import './App.css'; // import your CSS file
import submitIcon from './images/send-svgrepo-com.svg';
//import addEmailToFirebase from './Firebase';

function MyPage() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleButtonClick = () => {
    setShowEmailInput(true);
    setEmailSubmitted(false); // reset emailSubmitted state when the button is clicked
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false); // clear email error when user types in input field
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    // Do something with the email address, such as send it to a server
    console.log(`Submitting email: ${email}`);
  
    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true); // set email error state to true
      return; // stop function execution if email is invalid
    }
  
    setShowEmailInput(false); // reset showEmailInput to false
    setEmailSubmitted(true); // set emailSubmitted state to true
  
    // Add email to Firebase
    //await addEmailToFirebase(email);
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
              {emailSubmitted ? (
                <p className="email-submitted">Jouw emailadres is naar ons verstuurd!</p>
              ) : (
                'Hou Mij Op De Hoogte'
              )}
            </button>
          )}
        </div>
  );
}

export default MyPage;
