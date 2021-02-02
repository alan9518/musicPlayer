/* ==========================================================================
** Playlist Item Component
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
    const PlaylistItem = ({id,name, images, isPublic, selectPlaylist, activePlaylist}) => {
        

        // const {cover, name, artist, id, active} = song;
        const mainImage = images[0].url;
        
        const activeClass = activePlaylist? 'selected' : '';
        // className={`PlaylistItem ${active ? 'selected' : ''}`}

        //? setCurrentSong(songId) comes from parent Component
        return(
            <div className={`librarySong ${activeClass}`} onClick = {() => selectPlaylist(id)} onDoubleClick={(event) => event.preventDefault()} id= {id}>
               <img src={mainImage && mainImage} alt={name && name}/>
                <div className="songDescription">
                    <h3> {name && name} </h3>
                    <h4> {isPublic ? 'public' : 'private'}</h4>
                </div>
             </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default PlaylistItem;
