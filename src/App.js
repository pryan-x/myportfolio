import React from 'react';
import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'

function App() {
  return (
    <div id='home' className="App" style={{overflow: 'hidden'}}>
      <Header/>
      {/* <div style={{paddingTop: '54px'}}/> */}
      <Landing/>
    </div>
  );
}

export default App;
