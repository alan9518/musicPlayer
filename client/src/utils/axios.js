/* ==========================================================================
** Axios Helper class
** 31/01/2021
** Alan Medina Silva
** ========================================================================== */

import axios from 'axios';

const baseURL = 'https://api.spotify.com';
let headers = {};

if(localStorage.token)
    headers.Authorization = `Bearer ${localStorage.token}`;


const axiosInstance = axios.create({
    baseURL : baseURL,
    headers : headers
});

axiosInstance.interceptors.response.use((res)=> 
    new Promise((resolve, reject) => {
        resolve(res)
    }),
    (error) => {
        // ? If the error is not coming from the server
        if(!error.response) {
            return  new Promise((resolve, reject) => {
                reject(error)
            })
        }

        // ? Check for error code on the response
        if(error.response.status === 401 || error.response.status === 403 ){
            localStorage.removeItem('token');
        }
    }
)
