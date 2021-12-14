import React from 'react';
import classes from './Welcome.module.css';

const Sustainability: React.FC = () => {
  return ( 
    <article className={classes['banner-container']}>
      <div className={classes['banner']}>
          <div className={classes['banner-header']}>
            <h1 className={classes['banner-header--tageline']}>Tag Line</h1>
            <h1>Are the Heart<br />of Our Business</h1>
          </div>
          <div className={classes['banner-browse']}>
            <a href="#" className={classes['banner-browse__link']}>Browse Our Products</a>
          </div>
      </div>
      <section className={classes['location']}>
        <div className={classes['location__title']}>Our location</div>
        <div className={classes['location__address']}>345 Shoreway Road, San Carlos, CA 94070</div>
        <div className={classes['location__map']}>First time at Lyngso? Familiarize yourself with our 
          <a className={classes['location__link']} 
          href="https://www.lyngsogarden.com/wp-content/uploads/2017/04/Lyngso-Site-Map-Draft-10-05-2016.pdf" 
          target="_blank">location site map</a>
        </div>
      </section>
      <div className={classes['lyngso-mission']} >
        <h2>
          Landscape beautifully. Landscape sustainably.<br />
          Landscape Lyngso.
        </h2>
        <p>Whether you’re a contractor working on a large landscaping project, or a homeowner improving the soil in your garden, Lyngso has all the landscaping and gardening materials to make your corner of the world more beautiful.</p>
        <p>Many of the people you’ll work with at Lyngso have been with us for over 20 years. Based in San Carlos, we are family-run and employee-owned business.</p>
      </div>  

    </article>
  );
}

export default Sustainability;