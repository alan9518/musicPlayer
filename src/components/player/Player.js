/* ==========================================================================
** Player Controls Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';
    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import {faPlay, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------
// Create Component
// --------------------------------------
    const Player = () => {

        return(
            <div className="playerContainer"> 
                <div className="timeControl">
                    <p>Start Time</p>
                    <input type="range" name="range" id="range"/>
                    <p>End Time</p>
                </div>

                <div className="playControl">
                    <FontAwesomeIcon  className = "back"  size="2x" icon = {faAngleLeft} />
                    <FontAwesomeIcon  className = "play"  size="2x" icon = {faPlay} />
                    <FontAwesomeIcon  className = "forward"  size="2x" icon = {faAngleRight} />
                </div>

            </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Player;
