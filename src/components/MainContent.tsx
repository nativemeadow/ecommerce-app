import React from 'react';
import classes from './MainContent.module.css';

const MainContent: React.FC = (props) => {
  return ( 
    <main className={classes['main-content']}>
      <section>
        {props.children}
      </section>
    </main>
  );
}

export default MainContent;