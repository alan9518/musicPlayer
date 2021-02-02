/* ==========================================================================
** Spotify Controller
** 01/02/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Player, Song, Library, Nav, EmptySongMessage } from '../index';



// --------------------------------------
// Create Component
// --------------------------------------
const SpotifyContainer = ({ token, updateToken }) => {

    const [playlists, setPlaylists] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [libraryStatus, setLibraryStatus] = useState(false);

    useEffect(() => {
        if (token) {
            // setToken(token);
            getUserPlaylists().then((res) => {
                const { data } = res;
                setPlaylists(data.items)
                setLibraryStatus(true);
            }).catch((error)=> {
                console.log("🚀 ~ file: SpotifyContainer.js ~ line 36 ~ getUserPlaylists ~ error", error);
                updateToken(true)
            })
        }
    }, [token])

    // ?--------------------------------------
    // ? Get New Releases
    // ?--------------------------------------
    const getUserPlaylists = async () => {
        return axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }



    return (
        <React.Fragment>
            <Nav libraryStatus = {libraryStatus} setLibraryStatus = {setLibraryStatus}/>
            {currentSong ? <Song currentSong = {currentSong} /> : <EmptySongMessage/>}
            {currentSong && <Player currentSong = {currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef}/>}
            <Library  playlists = {playlists}  setCurrentSong = {setCurrentSong} audioRef = {audioRef} activeSong = {currentSong} libraryStatus = {libraryStatus} token = {token}/>
        </React.Fragment>
    )

}


export default SpotifyContainer;