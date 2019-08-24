import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }
  
  const makeAPICall = () => {
    let response = await axios.get()
  }

  componentDidMount() {
    this.makeAPICall();
  }





  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
