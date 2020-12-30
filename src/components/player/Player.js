/* ==========================================================================
** Player Controls Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React, {useRef, useState} from 'react';
    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
    const Player = ({currentSong, isPlaying, setIsPlaying}) => {

        const {audio} = currentSong;
        const audioRef = useRef(null);

        // ?--------------------------------------
        // ? Handle State
        // ?--------------------------------------

            const [songInfo, setSongInfo] = useState({
                currentTime : 0,
                duration: null
            });
            
        
        // ?--------------------------------------
        // ? Event Handlers
        // ?--------------------------------------
            const playSongHandler = (event) => {
                isPlaying === false ?audioRef.current.play() : audioRef.current.pause();
                setIsPlaying(!isPlaying);
            }

            //? Update song Timers
            const timeUpdateHandler = (event) => {
                const currentTime = event.target.currentTime;
                const duration = event.target.duration;
                setSongInfo({...songInfo, currentTime, duration})
            }

        
            //? Format Song Timers
            const formatTime = (time) => {
                return `${Math.floor(time/60)} : 0 ${Math.floor(time % 60)}`
            }

            const dragHandler = (event) => {
                audioRef.current.currentTime = event.target.value;
                setSongInfo({...songInfo, currentTime : event.target.value})
            }




        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return(
            <div className="playerContainer"> 
                <div className="timeControl">
                    <p>{formatTime(songInfo.currentTime)}</p>
                    <input type="range" name="range" id="range" min = {0} max = {songInfo.duration} value = {songInfo.currentTime} onChange = {dragHandler}/>
                    <p>{formatTime(songInfo.duration)}</p>
                </div>

                <div className="playControl">
                    <FontAwesomeIcon  className = "back"  size="2x" icon = {faAngleLeft} />
                    <FontAwesomeIcon  onClick = {playSongHandler} className = "play"  size="2x" icon = {isPlaying === false ? faPlay : faPause} />
                    <FontAwesomeIcon  className = "forward"  size="2x" icon = {faAngleRight} />
                </div>

                 <audio ref= {audioRef} src = {audio} onTimeUpdate = {timeUpdateHandler} onLoadedMetadata = {timeUpdateHandler} ></audio>

            </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Player;
