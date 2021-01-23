/* ==========================================================================
** Music Player Main Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import { useState, useEffect, useRef } from 'react';  
  import {Player, Song, Library, Nav } from './components';
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
    
    
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(data[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [libraryStatus, setLibraryStatus] = useState(false);

    useEffect(() => {
      setSongs(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
        <Nav libraryStatus = {libraryStatus} setLibraryStatus = {setLibraryStatus}/>
        <Song currentSong = {currentSong} />
        <Player currentSong = {currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} songs={songs} setCurrentSong = {setCurrentSong} />
        <Library library =  {songs} setCurrentSong = {setCurrentSong} audioRef = {audioRef} activeSong = {currentSong && currentSong.id} libraryStatus = {libraryStatus} />
      </div>
    );
  }

// --------------------------------------
// Export Component
// --------------------------------------
  export default App;
