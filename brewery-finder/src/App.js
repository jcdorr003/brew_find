import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
