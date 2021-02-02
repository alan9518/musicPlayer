/* ==========================================================================
** Library Song Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React, {useEffect} from 'react';

// --------------------------------------
// Create Component
// --------------------------------------
    const LibrarySong = ({track, selectSong, activeSong}) => {
        

        const { name, artists, id, album} = track;
        const { images } = album;
        // const {name} = artist
        const mainImage = images[0].url
        const activeClass = activeSong? 'selected' : '';
        // className={`librarySong ${active ? 'selected' : ''}`}


        
       
        //? setCurrentSong(songId) comes from parent Component
        return(
            <div className={`librarySong ${activeClass}`} onClick = {() => selectSong(track)} onDoubleClick={() => selectSong(id)} id= {id}>
               <img src={mainImage && mainImage} alt={name && name}/>
                <div className="songDescription">
                    <h3> {name && name} </h3>
                    <h4> {artists && artists[0].name}</h4>
                    <h4> {album.name && album.name}</h4>
                </div>
             </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default LibrarySong;
