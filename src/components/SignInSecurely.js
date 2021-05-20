import React from 'react';
import '../styles/SignInSecurely.css';

function SignInSecurely({dataSign}) {
    return (
        <div className="signIn__securelyContainer">
            <div className="signIn__securely">
                <h2>Sign in for the best experience</h2>
                <button className="singIn__securely-btn">Sign in securely</button>
            </div>
            <div className="ship__image" style={{backgroundImage: `url(${dataSign[0].image})`}}></div>
        </div>
    )
}

export default SignInSecurely
