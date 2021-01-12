/* ==========================================================================
** Songs Library Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React, {useRef, useState, useEffect} from 'react';
    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import LibrarySong from "./LibrarySong"
    import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
const Library = ({library, setCurrentSong, audioRef, activeSong, libraryStatus}) => {

    

    // ?--------------------------------------
    // ? Handle State
    // ?--------------------------------------

    const setNewSong = (songID) => {
        const newSong = library.find(song => song.id === songID)
        setCurrentSong(newSong);
        audioRef && audioRef.current.play();
        
    }

    

    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return(
        <div className= {`libraryContainer ${libraryStatus === true ? 'activeLibrary' : '' }`}> 
            <h2> Library </h2>

            <div className="librarySongs">
                {
                    library && library.map(song => {
                        return <LibrarySong key = {song.id} song = {song} setCurrentSong = {setNewSong} activeSong = {activeSong === song.id ? true : false}/>
                    })
                }
            </div>

        </div>
    )

}

// --------------------------------------
// Export Component
// --------------------------------------
export default Library;
