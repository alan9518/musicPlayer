/* ==========================================================================
** Library Song Component
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
    const LibrarySong = ({song, setCurrentSong, activeSong}) => {
        

        const {cover, name, artist, id} = song;
        
        const activeClass = activeSong? 'selected' : '';
        
        //? setCurrentSong(songId) comes from parent Component
        return(
            <div className={`librarySong ${activeClass}`} onClick = {() => setCurrentSong(id)} onDoubleClick={() => setCurrentSong(id)} id= {id}>
               <img src={cover && cover} alt={name && name}/>
                <div className="songDescription">
                    <h3> {name && name} </h3>
                    <h4> {artist && artist}</h4>
                </div>
             </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default LibrarySong;
