import React from 'react'
import './App.css'
import Header from '../commons/header/Header.js'
import Main from '../commons/main/Main.js'
import Footer from '../commons/footer/Footer.js'
import {AuthStatus} from '../../types'

function App() {
  return (
    <div>
      <Header authStatus={AuthStatus.SIGNED_IN}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
