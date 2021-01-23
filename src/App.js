/* ==========================================================================
** Music Player Main Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import { useState, useRef } from 'react';  
  import {Player, Song, Library, Nav } from './components';
  import data from "./util";
  import "./styles/app.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
  
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
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [libraryStatus, setLibraryStatus] = useState(false);

    return (
      <div className="App">
        <Nav libraryStatus = {libraryStatus} setLibraryStatus = {setLibraryStatus}/>
        <Song currentSong = {currentSong} />
        <Player currentSong = {currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} songs={songs} setCurrentSong = {setCurrentSong} />
        <Library library =  {songs} setCurrentSong = {setCurrentSong} audioRef = {audioRef} activeSong = {currentSong.id} libraryStatus = {libraryStatus} />
      </div>
    );
  }

// --------------------------------------
// Export Component
// --------------------------------------
  export default App;
