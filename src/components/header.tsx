import React from 'react';

import classes from './header.module.css';

const Header: React.FC = () => {

  return (
    <div className={classes['top-bar']}>
      <ul className={classes['top-bar__items']}>
        <li className={classes['top-bar__item']}><a href="#">Account Login</a></li>
        <li className={classes['top-bar__item']}><a href="#">Company</a></li>
      </ul>
    </div>
  )
}

export default Header;