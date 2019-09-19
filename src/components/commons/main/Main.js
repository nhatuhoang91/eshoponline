import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/home-page'
import SigninPage from '../../pages/signin-page'
import ProductPage from '../../pages/product-page'
import ContactPage from '../../pages/contact-page'
import {CONTACT_US_URL,
   HOME_PAGE_URL, 
   PRODUCT_PAGE_URL,
   SHOPPING_CART_PAGE_URL,
   SIGNIN_PAGE_URL} from '../../../constants/constants.js'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path={HOME_PAGE_URL} component={HomePage}/>
        <Route exact path={SIGNIN_PAGE_URL} component={SigninPage}/>
        <Route exact path={PRODUCT_PAGE_URL} component={ProductPage}/>
        <Route exact path={CONTACT_US_URL} component={ContactPage}/>
        <Route exact path={SHOPPING_CART_PAGE_URL} component={ContactPage}/>
      </Switch>
    </main>
  );
}

export default Main;
