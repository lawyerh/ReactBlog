import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(){
    const posts = axios.get('localhost:4000/posts')

    return {
        type: FETCH_WEATHER,
        payload: posts
    };


}