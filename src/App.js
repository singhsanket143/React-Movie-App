import './App.css';
import Button from '@mui/material/Button';
import Header from './Components/Header/header';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Movies from './Components/Movies/Movies';
import Movie from './Components/Movies/Movie';
import { useState, useEffect } from 'react';
import { AppContext } from './Context/SearchContext';


function App() {
  const [movies, setMovies] = useState(['avengers']);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMovies(['superman'])
  //   }, 5000);
  // }, [])

  return (
    <AppContext.Provider value = {{
      state: movies,
      setState: setMovies
  }}> 
    <div className="App">
      <Header/>
      <Movies/>
    </div>
  
  </AppContext.Provider>
    
  );
}

export default App;
