import React, { Fragment } from 'react';
import classes from '../components/Main.module.css';
import MainContent from '../components/MainContent';

import HeaderNav from '../components/HeaderNav';

const Layout: React.FC = (props) => {
  return ( 
      <Fragment>
        <HeaderNav />
        <main className={classes['main-content']}>{props.children}</main>
      </Fragment>
  );
}

export default Layout;