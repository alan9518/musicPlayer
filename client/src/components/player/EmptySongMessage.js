/* ==========================================================================
** Show no connection Message or no Song Selected
** 01/02/2021
** Alan Medina Silva
** ========================================================================== */
// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';

// --------------------------------------
// Create Component
// --------------------------------------
const EmptySongMessage = ({ customMessage, showRedirectButton }) => {

    const redirectToHomePage = () => {
        const homeUrl = window.location.origin;
        window.location.href = homeUrl
    }
   

    return (
        <div className="songContainer">
            
                <h3>
                    {customMessage ? customMessage : 'No Song Selected' }
                </h3>
            

            {
                showRedirectButton ?   
                <button className="login-button" onClick = {redirectToHomePage}>
                    Login With Spotify
                </button>
                : null
            }

        </div>
    )

}

// --------------------------------------
// Export Component
// --------------------------------------
export default EmptySongMessage;
