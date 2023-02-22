import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const obtenerFrase = () => {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => {
        setFrase(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const [frase, setFrase] = useState(null)

  if(frase === null){
    return(
      <>
        <div id='bienvenida'>
          <h1 id='titulo'>The Simpsons</h1>
          <h3 id="arrow">Click for quotes ⬇</h3>
          <button onClick={obtenerFrase}>Let's go!</button>
        </div>
      </>
    )
  }else{
    return (
      <>
        <div id='contenedor-quote'>
          <div id='quote'>
            <h1 id='titulo'>The Simpsons</h1>
            <div id='imagen'>
              <img src={frase[0].image} height="220px" alt='character photo'/>
            </div>
            <p id='contenido-frase'>{frase[0].quote}</p>
            <p id='autor'>{frase[0].character}</p>
            <div id='contenedor-boton'>
              <button onClick={obtenerFrase}>Next</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
