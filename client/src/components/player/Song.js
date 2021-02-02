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
const Song = ({ currentSong }) => {

    
    const { name, artists, album } = currentSong;
    const { images } = album;
    const album_image = images[0].url;
    const album_name = album.name
    const artist = artists[0].name
    

    return (
        <div className="songContainer">
            <div className="circularPortrait">
                <img src={album_image} alt={name} />
            </div>

            <h2> {name} </h2>
            <h4> {album_name}</h4>
            <h4> {artist}</h4>
        </div>
    )

}

// --------------------------------------
// Export Component
// --------------------------------------
export default Song;
