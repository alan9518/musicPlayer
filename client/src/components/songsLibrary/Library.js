/* ==========================================================================
** Songs Library Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { Credentials } from '../../utils/Credentials';
import LibraryHeader from './LibraryHeader';
import PlaylistItem from "./PlayListItem";
import LibrarySong from "./LibrarySong";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
const Library = ({ playlists, setCurrentSong, audioRef, activeSong, libraryStatus, token }) => {


    const [playlistSongs, setPlaylistSongs] = useState([]);
    const [playlistSelected, setPlaylistSelected] = useState(null);
    const [songsEndPoint, setSongsEndpoint] = useState('');
    // const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [songsLoading, setSongsLoading] = useState(false);

    // ?--------------------------------------
    // ? Handle State
    // ?--------------------------------------

    const selectPlaylist = (playlistID) => {
        const selectedPlaylist = playlists.find(pl => pl.id === playlistID);
        setPlaylistSelected(selectedPlaylist);
        setSongsEndpoint(selectedPlaylist.href);
    }


    // ?--------------------------------------
    // ? Get New Releases
    // ?--------------------------------------
    const getPlaylistSongs = async (endpoint) => {
        console.log("🚀 ~ file: Library.js ~ line 62 ~ getPlaylistSongs ~ token", token);
        return axios.get(endpoint, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).catch(error=>{
            console.log("🚀 ~ file: Library.js ~ line 67 ~ getPlaylistSongs ~ error", error);
        })
    }

    const selectSong = (song) => {
        console.log("🚀 ~ file: Library.js ~ line 62 ~ setCurrentSong ~ song", song);
        setCurrentSong(song);
    }


    useEffect(() => {
        console.log("🚀 ~ file: Library.js ~ line 46 ~ Library ~ songsEndPoint", songsEndPoint);
        if (songsEndPoint !== '') {
            getPlaylistSongs(songsEndPoint).then((res) => {
        

                const { data } = res;
                console.log("🚀 ~ file: App.js ~ line 48 ~ getPlaylistSongs ~ data", data);


                setPlaylistSongs(data?.tracks?.items)
            });
        }

    }, [songsEndPoint])


    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <div className={`libraryContainer ${libraryStatus === true ? 'activeLibrary' : ''}`}>
            {playlistSelected !== null ? <LibraryHeader playlistTitle={playlistSelected.name} playlistImage={playlistSelected.images[0].url} backToLibrary={() => setPlaylistSelected(null)} /> : <h2> Playlists</h2>}

            <div className="librarySongs">
                {
                    playlistSelected === null ?
                        playlists && playlists.map(item => {
                            return <PlaylistItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                images={item.images}
                                isPublic={item.public}
                                selectPlaylist={selectPlaylist}
                                activePlaylist={activeSong === item.id ? true : false} />
                        })
                        :
                        playlistSongs.map((song) => {
                            return <LibrarySong track={song.track} key={`song-${song.track.id}`} selectSong = {selectSong}/>
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
