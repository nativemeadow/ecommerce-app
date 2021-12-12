import React from 'react';
import classes from './Connect.module.css';

const productTitle = classes['component-title'] + ' ' + classes['products__title']; 
const connectTitle = classes['component-title'] + ' ' + classes['connect-section__title'];
const addressTitle = classes['address-hours__title'] + ' ' + classes['component-title'];
const affiliatesTitle = classes['affiliates--section__title'] + ' ' + classes['component-title'];
const partnersTitle = classes['partners--section__title'] + ' ' + classes['component-title'];

const Connect: React.FC = () => {
  return ( 
    <section className={classes.connections}>
      <div className={classes['connections__grid']}>
        <div className={classes['connect-section']}>
          <h3 className={connectTitle}>
          Connect with us
          </h3>
          <ul className={classes['connect__items']}>
              <li className={classes['connect__item']}><a href="https://www.facebook.com/LyngsoGardenMaterials/ " className={classes['connect__item-social']} aria-label="Lyngso Garden Facebook link" title="Lyngso Garden Facebook"><span className={"fa fa-facebook"} aria-hidden="true"></span></a></li>
              <li className={classes['connect__item']}><a href="https://plus.google.com/+LyngsoGardenMaterialsIncRedwoodCity" className={classes['connect__item-social']} aria-label="Lyngso Garden Google Plus link" title="Lyngso Garden Google Plus"><span className={"fa fa-google-plus"} aria-hidden="true"></span></a></li>
              <li className={classes['connect__item']}><a href="http://www.houzz.com/pro/lyngso/lyngso-garden-materials-inc" className={classes['connect__item-social']} aria-label="Lyngso Garden Houzz link" title="Lyngso Garden Houzz"><span className={"fa fa-houzz"} aria-hidden="true"></span></a></li>
              <li className={classes['connect__item']}><a href="https://www.instagram.com/lyngsogardenmaterials/" className={classes['connect__item-social']} aria-label="Lyngso Garden Instagram link" title="Lyngso Garden Instagram"><span className={"fa fa-instagram"} aria-hidden="true"></span></a></li>
              <li className={classes['connect__item']}><a href="https://www.linkedin.com/company/lyngso-garden-materials-inc- " className={classes['connect__item-social']} aria-label="Lyngso Garden Linkedin link" title="Lyngso Garden Linkedin"><span className={"fa fa-linkedin"} aria-hidden="true"></span></a></li>
              <li className={classes['connect__item']}><a href="http://www.yelp.com/biz/lyngso-garden-materials-san-carlos " className={classes['connect__item-social']} aria-label="Lyngso Garden Yelp link" title="Lyngso Garden Yelp"><span className={"fa fa-yelp"} aria-hidden="true"></span></a></li>
          </ul>
          <h3 className={productTitle}>Products</h3>
          <ul className={classes['product__items']}>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Sand, Gravel &amp; Decorative Aggregates</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Composts, Mulches, Soils &amp; Amendments</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Biologicals, Fertilizers &amp; Bagged Soils</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Natural Stone</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Pottery &amp; Garden Ornaments</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Water Features</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Building Materials &amp; Tools</a></li>
                <li className={classes['product__item']}><a className={classes['product-item__link']} href="#">Precast Concrete Products</a></li>
          </ul>
          <h3 className={addressTitle}>Address</h3>
          <div className={classes['address--hours']}>
            <address className={classes['address__detail']}>345 Shoreway Road<br/>
              San Carlos, CA 94070</address>
              <p>P 650&nbsp;.&nbsp;364&nbsp;.&nbsp;1730
              <br />F 650.&nbsp;361&nbsp;.&nbsp;1933</p>
              <h3 className={classes['component-title']}>Hours:</h3>
              <p>Mon to Fri 7am to 4pm <br />
              Sat 8am to 4pm <br />
              Sun Closed</p>
              <h3 className={classes['component-title']}>First time at Lyngso?</h3>
              <a className={classes['product-item__link']} href="#">View Our Business Map</a>
          </div>
        </div>
        <div className={classes['affiliates--section']}>
          <h3 className={affiliatesTitle}>
            Affiliates
          </h3>
          <div className={classes['affiliate-one']}>
              <a href="https://www.asla.org/"><img  className={classes['affiliates--section__img']} src="images/affiliates/american-landscape-architects.png" /></a>
          </div>
          <div className={classes['affiliate-two']}>
              <a href="https://www.apld.org/"><img  className={classes['affiliates--section__img']} src="images/affiliates/professional-landscape-designers.png" /></a>
          </div>
          <div className={classes['affiliate-three']}>
              <a href="http://www.clca.org/"><img  className={classes['affiliates--section__img']} src="images/affiliates/california-landscape-contractors.png" /></a>
          </div>
          <div className={classes['affiliate-four']}>
              <a href="https://www.naturalstoneinstitute.org/"><img  className={classes['affiliates--section__img']} src="images/affiliates/nsi.jpeg" /></a>
          </div>
          <div className={classes['affiliate-five']}>
              <a href="https://www.facebook.com/pages/category/Environmental-Conservation-Organization/Bay-Area-Gardeners-Association-104511274290934/"><img  className={classes['affiliates--section__img']} src="images/affiliates/baga.png" /></a>
          </div>
          <div className={classes['affiliate-six']}>
              <a href="http://smsf-mastergardeners.ucanr.edu/"><img  className={classes['affiliates--section__img']} src="images/affiliates/master-gardener.png" /></a>
          </div>
          <h3 className={partnersTitle}>
          Our Sustainability Partners
          </h3>
          <div className={classes['partners--section']}>
            <a href="http://www.omri.org/"><img  className={classes['affiliates--section__img']} src="images/partners/seal-omri.png" /></a>
            <a href="https://www.cdfa.ca.gov/"><img  className={classes['affiliates--section__img']} src="images/partners/seal-cdfa.png" /></a>
            <img  className={classes['affiliates--section__img']} src="images/partners/logo-recycle.png" />
            <a href="http://www.usgbc.org/"><img  className={classes['affiliates--section__img']} src="images/partners/seal-usgbc.png" /></a>
            <a href="https://greenbusinessca.org/"><img  className={classes['affiliates--section__img']} src="images/partners/green-business-logo.png" /></a>
            <a href="http://www.peninsulacleanenergy.com/"><img  className={classes['affiliates--section__img']} src="images/partners/seal-peninsula-clean-energy.png" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;