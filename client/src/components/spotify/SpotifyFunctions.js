import Spotify from 'spotify-web-api-js';
import uniq from 'lodash.uniq';
import axios from 'axios';
import flatten from 'lodash.flatten';
import chunk from 'lodash.chunk';

export const redirectUrlToSpotifyForLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI =
        process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_SPOTIFY_PRODUCTION_REDIRECT_URI
            : process.env.REACT_APP_SPOTIFY_DEVELOPMENT_REDIRECT_URI;
    const scopes = [
        "user-modify-playback-state",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private"];
    return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
        '&redirect_uri=' + REDIRECT_URI +
        '&scope=' + encodeURIComponent(scopes.join(' ')) +
        '&response_type=token';
}



export const checkUrlForSpotifyAccessToken = () => {
    const params = getHashParams();
    const accessToken = params.access_token
    if (!accessToken) {
        return false
    }
    else {
        return accessToken
    }
}

// TODO--------------------------------------
// TODO:  Implete Token Refresh
// TODO--------------------------------------

// export const refreshToken = () => {
//     const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
//     const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
//     const REDIRECT_URI =
//         process.env.NODE_ENV === "production"
//             ? process.env.REACT_APP_SPOTIFY_PRODUCTION_REDIRECT_URI
//             : process.env.REACT_APP_SPOTIFY_DEVELOPMENT_REDIRECT_URI;
   

//     // return axios({
//     //     url: "https://accounts.spotify.com/api/token",
//     //     method: "POST",
//     //     headers: {
//     //         'Authorization': 'Basic ' + window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
//     //         'Content-Type': 'application/x-www-form-urlencoded',
//     //         'Content-Length': postQuery.length
//     //     },
//     //     body: {grant_type: 'client_credentials'}
//     // });
//     axios({
//         method: "post",
//         url: spotify_url,
//         params: {
//           grant_type: "authorization_code",
//           code: req.query.auth_code,
//           redirect_uri: process.env.REDIRECT_URI
//         },
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           "Authorization": "Basic " + (Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString("base64"))
//         }
//     })

// }



const getHashParams = () => {
    //helper function to parse the query string that spotify sends back when you log in
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    // eslint-disable-next-line
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}