import React, { Fragment, useRef } from 'react';
import classes from './Signup.module.css';


const Connect: React.FC = () => {

  const emailRef =  useRef<HTMLInputElement>(null);
  const generalCBRef = useRef<HTMLInputElement>(null);
  const compostTeaCBRef = useRef<HTMLInputElement>(null); 

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const emailAddress = emailRef.current?.value;

    console.log('email address:', emailAddress);
  }

  const checkGeneralHandler = (event: React.FormEvent) => {
    const compostTeaCB = generalCBRef.current?.value;
  }

  const checkGeneralTeaHandler= (event: React.FormEvent) => {
    const compostTeaCB = compostTeaCBRef.current?.value;
  }

  const emailInput = classes['email'] + ' ' + classes['email-wrap'];
  const emailInputDisplay = classes['email__input'] + ' ' + classes['email__input--view'];
  return ( 
    <Fragment>
      <section className={classes['signup-section']}>
          <h2 className={classes['newsletter-title']}>Sign Up for our<br/>Newsletter</h2>
        <form onSubmit={signUpHandler}  aria-label="sign up for our newsletter" className={classes['newsletter-form']}>
            <div className={classes['checkboxes']}>
              <ul className={classes['checkboxes__list']}>
                <li><input type="checkbox" checked value="4" id="general-check-box" ref={generalCBRef} onChange={checkGeneralHandler} />
                <label htmlFor="general-check-box">General</label></li>
                <li><input type="checkbox" checked value="4" id="compost-tea-check-box" ref={compostTeaCBRef} onChange={checkGeneralTeaHandler}/>
                  <label htmlFor="compost-tea-check-box">Compost Tea</label></li>
              </ul>
            </div>
            <div className={emailInput}>
            <input className={emailInputDisplay} name='email' type='email' placeholder='Your Email Address' required ref={emailRef}/>
            </div>
            <div className={classes['button']}>
            <button type='submit'>Join</button>
            </div>
        </form>
      </section>
    </Fragment>
  );
}

export default Connect;