/* ==========================================================================
** Navigation component to Toggle Songs
** 11/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------   
    import React from 'react';
    import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
    import {faMusic} from  "@fortawesome/free-solid-svg-icons";


// --------------------------------------
// Create Component
// --------------------------------------
    const Nav  = ({libraryStatus, setLibraryStatus}) => {
        return (
            <nav>
                <h1> React Hooks Music Player  </h1>
                <button onClick = {() => {setLibraryStatus(!libraryStatus)}}>
                    Library
                    <FontAwesomeIcon icon = {faMusic}/>
                </button>
            </nav>
        )
    }

export default Nav;