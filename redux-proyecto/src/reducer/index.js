// Importamos las constantes
import { EJEMPLO, GET_GENDERS } from '../actions';

// Inicializamos el store. este objeto nos dara las distintas var/props que necesitaremos
const initialState = {
    gendersDB: []
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case EJEMPLO:
            return {
                ...state,
                movies: state.movies.concat(action.payload) // o con spread operator ==> movies: [...state.movies, action.payload], acumulamos lo que esta + lo que enviaron
            }
        case GET_GENDERS:
            return {
                ...state,
                gendersDB: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

