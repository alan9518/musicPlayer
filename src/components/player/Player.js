/* ==========================================================================
** Player Controls Component
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
    const Player = () => {

        return(
            <div className="playerContainer"> 
                <div className="timeControl">
                    <p>Start Time</p>
                    <input type="range" name="range" id="range"/>
                    <p>End Time</p>
                </div>

                <div className="playControl">
                </div>

            </div>
        )

    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Player;
