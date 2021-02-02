/* ==========================================================================
** Library Header 
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
    const LibraryHeader = ({playlistTitle, playlistImage, backToLibrary}) => {
        

        // const {cover, name, artist, id, active} = song;
        // const mainImage = images[0].url;
        
        // const activeClass = activePlaylist? 'selected' : '';
        // className={`LibraryHeader ${active ? 'selected' : ''}`}

        //? setCurrentSong(songId) comes from parent Component
        return(
            <div className = 'library-header'>
                <FontAwesomeIcon  className = "back"  icon = {faArrowLeft} onClick = {backToLibrary} />
                
                <h2> {playlistTitle} </h2>
             </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default LibraryHeader;
