// Importamos las constantes
import { EJEMPLO, EJEMPLO2 } from '../actions';

// Inicializamos el store. este objeto nos dara las distintas var/props que necesitaremos
const initialState = {
    // movies: [],
    // movieDetail: {}
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case EJEMPLO:
            return {
                ...state,
                movies: state.movies.concat(action.payload) // o con spread operator ==> movies: [...state.movies, action.payload], acumulamos lo que esta + lo que enviaron
            }
        case EJEMPLO2:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

