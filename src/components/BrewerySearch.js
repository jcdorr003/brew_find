import React from 'react';

class BrewerySearch extends React.Component {
  state = {
    brewery:{},
    clicked:false
  }
  handleClick = (d) => {
    this.setState({
      currentBrewery:d,
      clicked:true
    })
  }

  render() {
    console.log(this.props.breweries)
    let mappedData = this.props.breweries.map((d, i) => {
      return <p key={i} onClick={()=>this.handleClick(d)}>{d.name}</p>
    })

    let details = this.state.clicked ? (
      <>
        <p>{this.state.currentBrewery.name}</p>
        <p>{this.state.currentBrewery.city}</p>
        <p>{this.state.currentBrewery.street}</p>
        <a target='_blank' href={this.state.currentBrewery.website_url}>Website</a>
      </>
    ) : null
    return (
      <div id='breweryContainer'>
        <div id='breweryList'>
          {mappedData}
        </div>
        <div id='breweryDetails'>
          {details}
        </div>
      </div>
    )
  }
}

export default BrewerySearch;
