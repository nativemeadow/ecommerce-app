import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HeaderNav.module.css';

const HeaderNav: React.FC = () => {

  const searchRef = useRef<HTMLInputElement>(null);

  const searchHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const searchTerms = searchRef.current?.value;

    console.log('search button clicked, entered:', searchTerms)
  }

  const shoppingCart = classes['main-nav__item'] + ' ' + classes['shopping--cart'];
  const mainNavSearch = classes['main-nav__item'] + ' ' + classes['main-nav-search'];
  return (
      <header className={classes['main-header']}>
        <div className={classes["main-header__container"]}>
          <div className={classes["site-logo"]}>
            <NavLink to='/home'>
              <img className={classes["site-logo__image"]} src="./images/logo.png" alt="Lyngso logo" />
            </NavLink>
          </div>
          <nav className={classes["main-nav"]}>
            <ul className={classes["main-nav__items"]}>
              <li className={classes["main-nav__item"]}>
                <NavLink to='/products' className={navData => navData.isActive ? classes.active : '' }>
                  Products
                </NavLink> 
              </li>
              <li className={classes["main-nav__item"]}>
                <NavLink to='/services' className={navData => navData.isActive ? classes.active : '' }>
                  Services
                </NavLink>
              </li>
              <li className={classes["main-nav__item"]}>
                <NavLink to='/resources' className={navData => navData.isActive ? classes.active : '' }>
                  Resources
                </NavLink>
              </li>
              <li className={classes["main-nav__item"]}>
                <NavLink to='/sustainability' className={navData => navData.isActive ? classes.active : '' }>
                  Sustainability
                </NavLink>
              </li>
              <li className={classes["main-nav__item"]} >
                <NavLink to='/faq' className={navData => navData.isActive ? classes.active : '' }>
                  FAQ
                </NavLink>
              </li>
              <li className={classes["main-nav__item"]}>
                <NavLink to='/contact-us' className={navData => navData.isActive ? classes.active : '' }>
                  Contact Us
                </NavLink>
              </li>
              <li className={mainNavSearch}>
                <div className={classes["nav-search"]}>
                  <form onSubmit={searchHandler} aria-label="search from - search for products" >
                    <input type="hidden" name="mode" value="searchstore" />
                    <input className={classes["nav-search__input"]} title="Product search..." ref={searchRef} 
                      type="search" name="search[searchfor]" placeholder="Product search ..." required={true} />
                    <button className={classes["nav-search__button"]} type="submit" aria-label="Search" title="Search">
                          <span className={"fa fa-search"} aria-hidden="true"></span>
                    </button>
                  </form>
                  {/* <div  className={classes['shopping--cart']}>
                      <a className={classes["shopping--cart__link "]} href="#">
                        <img src="images/icon-cart.png" alt="shop" />
                      </a>
                  </div> */}
                </div>
              </li>
              <li className={shoppingCart}>
                  <a className={classes["shopping--cart__link "]} href="#">
                    <img src="images/icon-cart.png" alt="shop" />
                  </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default HeaderNav;