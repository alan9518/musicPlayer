/* ==========================================================================
** Player Controls Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React, {useRef, useState, useEffect} from 'react';
    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
    const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songs, setCurrentSong}) => {

        const {audio} = currentSong;
        

        // ?--------------------------------------
        // ? Handle State
        // ?--------------------------------------

            const [songInfo, setSongInfo] = useState({
                currentTime : 0,
                duration: null
            });

            useEffect(() => {
                
                if(isPlaying && audioRef.current.paused) {
                    
                    
                    audioRef.current.play();
                    setIsPlaying(!isPlaying); 
                    
                }else if(!audioRef.current.paused)
                    setIsPlaying(true) 
                    
                return () => {
                    console.log("🚀 ~ file: Player.js ~ line 38 ~ return ~ cleanup");
                }
                    
            }, [isPlaying, currentSong, audioRef])
            
        
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
                const duration = event.target.duration || 0;
                setSongInfo({...songInfo, currentTime, duration})
            }

        
            //? Format Song Timers
            const formatTime = (time) => {
                if(time !== null || !isNaN(time) )
                    return `${Math.floor(time/60)} : 0 ${Math.floor(time % 60)}`
                return '';
            }

            const dragHandler = (event) => {
                audioRef.current.currentTime = event.target.value;
                setSongInfo({...songInfo, currentTime : event.target.value})
            }

            const skipTrackHandler = (direction) => {
                const currentIndex = songs.findIndex((song) => song.id === currentSong.id )
                
                if(direction === 'skip-backward')
                    currentIndex === 0? setCurrentSong(songs[songs.length-1]) : setCurrentSong(songs[currentIndex-1])
                else
                    currentIndex === songs.length -1 ? setCurrentSong(songs[0]) : setCurrentSong(songs[currentIndex+1])
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
                    <FontAwesomeIcon  className = "back"  size="2x" icon = {faAngleLeft} onClick =  {()=>skipTrackHandler('skip-backward')}/>
                    <FontAwesomeIcon  onClick = {playSongHandler} className = "play"  size="2x" icon = {isPlaying ? faPause : faPlay } />
                    <FontAwesomeIcon  className = "forward"  size="2x" icon = {faAngleRight}  onClick =  {()=>skipTrackHandler('skip-forward')}/>
                </div>

                 <audio ref= {audioRef && audioRef} src = {audio} onTimeUpdate = {timeUpdateHandler} onLoadedMetadata = {timeUpdateHandler} ></audio>

            </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Player;
