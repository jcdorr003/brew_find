import React from 'react'

class BrewerySearch extends React.Component {
  state = {
    brewery:{},
    clicked:false
  }
  handleClick = (d) => {
    this.setState({
      street:d.street,
      clicked:true
    })
  }

  render() {
    console.log(this.props.allData)
    let mappedData = this.props.allData.map((d, i) => {
      return <p key={i} onClick={(d)=>this.handleClick(d)}>{d.name}</p>
    })

    let details = this.state.clicked ? this.state.street : null
    return (
      <React.Fragment>
        <div>
          {mappedData}
        </div>
        <div>
          {details}
        </div>
      </React.Fragment>
    )
  }
}

export default BrewerySearch;
