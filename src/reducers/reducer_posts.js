import {FETCH_WEATHER} from '../actions/fetch_weather';

export default function(state = null, action){
    switch(action.type){
        case FETCH_WEATHER:
            return action.payload
    }

    return state;
}