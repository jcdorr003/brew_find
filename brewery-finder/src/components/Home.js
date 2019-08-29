import React from 'react';

const Home = () => {
  return(
    <div className='welcome-container'>
      <h1 id='welcome1'>Got Beer?</h1>
      <img id='drunk-sock' src={require('../drunk_sock_puppet.gif')} alt='drunk puppet'/>
      <img id="drunk-cups" src={require('../drunk_cups.gif')} alt='drunk cups'/>
      <h1 id='welcome2'>Check out your local breweries!</h1>

    </div>
  )
}

export default Home;
