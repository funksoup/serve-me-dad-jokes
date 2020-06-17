import React, {useState} from 'react';
import API from './utils/API';

const App = () => {

  let [resultSetup, setResultSetup] = useState("");
  let [resultPunchline, setResultPunchline] = useState("");

  const handleJokeSetup = (event) => {
    event.preventDefault();
    API.getData()
      .then (
        res => setResultSetup(`${res.data.setup}`)
        )
  }

  const handleJokePunchline = (event) => {
    event.preventDefault();
    API.getData()
      .then (
        res => setResultPunchline(`${res.data.punchline}`)
        )
  }

  return (
    <>

    <h1>Serve up a dad joke</h1>
      <div className="joke-area"><button className="btn btn-secondary" onClick={handleJokeSetup}>Serve me a dad joke</button></div>
      <div className="joke-area">{resultSetup}</div>
      <div className="joke-area"><button className="btn btn-secondary" onClick={handleJokePunchline}>Alright, I'll bite</button></div>
      <div className="joke-area">{resultPunchline}</div>

    </>
    )
};


export default App;

