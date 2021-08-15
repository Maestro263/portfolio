import './App.css';
import Navlink from '../src/Navlink';
import AboutMe from '../src/AboutMe';
import Language from '../src/Language';
import Cv from '../src/Cv';
import Cases from '../src/Cases';
import React from 'react';


function App() {
  console.log(document.getElementsByClassName("cvtag"));
  return (
    <div className="App">
      <Navlink />
      <AboutMe />
      <Language  />
      <Cv className="cvtag" />
      <Cases />
    </div>
  );
}



export default App;
