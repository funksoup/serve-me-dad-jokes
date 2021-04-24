import React, {useState} from 'react';
import API from './utils/API';
import './App.css';


const App = () => {

  let [resultSetup, setResultSetup] = useState("");
  let [resultPunchline, setResultPunchline] = useState("");

  const handleJokeSetup = (event) => {
    event.preventDefault();
    API.getData()
      .then (
        res => setResultSetup(`${res.data.body[0].setup}`)
        )
  }

  const handleJokePunchline = (event) => {
    event.preventDefault();
    API.getData()
      .then (
        res => setResultPunchline(`${res.data.body[0].punchline}`)
        )
  }

  return (
    <>

    <h1>Serve up a dad joke</h1>
      <div className="joke-area"><button className="btn btn-secondary" onClick={handleJokeSetup}>Serve me a dad joke</button></div>
      <div className="joke-area">{resultSetup}</div>
      <div className="joke-area"><button className="btn btn-secondary" onClick={handleJokePunchline}>Alright, I'll bite</button></div>
      <div className="joke-area">{resultPunchline}</div>

      
      
     
      <div className="contrib-area">created by <a href="https://funksoup.com"> @funksoup </a> {"   |   "} <a href="https://github.com/funksoup/serve-me-dad-jokes"> Github repo</a></div>

    </>
    )
};


export default App;

