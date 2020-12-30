/* ==========================================================================
** Music Player Main Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import { useState } from 'react';  
  import {Player, Song, Library } from './components';
  import data from "./util";
  import "./styles/app.scss";
  
  // import './app.scss';

// --------------------------------------
// Create Component
// --------------------------------------
  function App() {


    // ?--------------------------------------
    // ? Add State
    // ?--------------------------------------
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false)
    // console.log("🚀 ~ file: App.js ~ line 28 ~ App ~ currentSong", currentSong);

    return (
      <div className="App">
        <Song currentSong = {currentSong}/>
        <Player currentSong = {currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying}/>
        <Library library =  {songs} setCurrentSong = {setCurrentSong}/>
      </div>
    );
  }

// --------------------------------------
// Export Component
// --------------------------------------
  export default App;
