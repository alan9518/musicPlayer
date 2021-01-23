/* ==========================================================================
** Song Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';

// --------------------------------------
// Create Component
// --------------------------------------
    const Song = ({currentSong}) => {

        const {cover, name, artist} = currentSong;

        return(
            <div className="songContainer">
               <img src={cover} alt={name}/>
                <h2> {name} </h2>
                <h4> {artist}</h4>
             </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Song;
