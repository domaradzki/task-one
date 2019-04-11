import React from 'react';
import Menu from '../Menu/Menu';
import Login from '../Login';

const Header = () => {
    return (
        <header className="header">
          <Menu />
          <Login />
        </header>
    )
}

export default Header;