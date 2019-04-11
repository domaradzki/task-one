import React from 'react';

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#">dashboard</a>
              </li>
              <li className="menu__item">
                <a href="#">recipes</a>
              </li>
              <li className="menu__item">
                <a href="#">challenge</a>
              </li>
            </ul>
          </nav>
    )
}

export default Menu;