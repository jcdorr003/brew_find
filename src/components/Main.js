import React from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import BrewerySearch from "./BrewerySearch";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      breweries: []
    };
  }

  makeAPICall = async () => {
    axios
      .get("https://api.openbrewerydb.org/breweries?by_state=new_york")
      .then(response => {
        this.setState({
          breweries: response.data
        });
        console.log("this is allData", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.makeAPICall();
  }

  render() {
    console.log(this.state.breweries);

    return (
      <main className="main">
        <Switch>
          <Route
            path="/search"
            render={props => (
              <BrewerySearch {...props} breweries={this.state.breweries} />
            )}
          />
          <Route exact path="/home" component={Home} />
          <Redirect from="/" to="home" />
        </Switch>
      </main>
    );
  }
}

export default Main;
