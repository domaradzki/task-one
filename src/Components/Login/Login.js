import React from 'react';
import person from '../../images/person_image.png';
import arrow from '../../images/button_arrow.png';

const Login = () => {
    return (
        <div className="login">
            <div className="login__image"><img src={person} alt="person" /></div>
            <div className="login__name">Olivia Wilde</div>
            <div className="button__image"><img src={arrow} alt="arrow_bottom" /></div>
          </div>
    )
}

export default Login;