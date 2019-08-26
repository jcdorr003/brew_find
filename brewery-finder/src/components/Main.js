import React from 'react';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import BrewerySearch from './BrewerySearch'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      allData: []
    }
  }

  makeAPICall = async () => {
    axios.get('https://api.openbrewerydb.org/breweries?by_state=new_york')
    .then(response => {
    this.setState({
      allData: response.data
    });
    console.log('this is allData', response.data);
    })
    .catch(error => {
    console.log(error);
    });
  }

  componentDidMount() {
    this.makeAPICall();
  }



  render() {
    console.log(this.state.allData)

    return (
      <main>

        <Switch>
          <Route path='/search' render={(props) => <BrewerySearch {...props} allData={this.state.allData} />} />
          <Route exact path='/home' component={Home} />
        </Switch>
      

      </main>
    )
  }
}


export default Main;
