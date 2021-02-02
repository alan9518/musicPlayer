const spotify = require('./Credentials');

const authorizeSpotify = (req, res) => {
    const scopes = ['user-follow-read', 'user-read-recently-played', 'user-library-read'];

    const url = `https://accounts.spotify.com/authorize?client_id=${spotify.client_id}&redirect_uri=${encodeURI(spotify.redirect_uri)}&response_type=code&scope=${scopes.join(' ')}`;
    res.redirect(url);
}

module.exports = authorizeSpotify;

