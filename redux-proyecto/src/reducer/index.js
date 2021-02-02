// Importamos las constantes
import { EJEMPLO, GET_GENDERS, GET_ALL_POST, GET_POST_BY_GENDER, } from '../actions';

// Inicializamos el store. este objeto nos dara las distintas var/props que necesitaremos
const initialState = {
    gendersDB: [],
    allPost: [],
    selectedGenderPost: []
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
        case GET_ALL_POST:
            return {
                ...state,
                allPost: state.allPost.concat(action.payload)
            }
            case GET_POST_BY_GENDER:
            console.log(action)
            return {
                ...state,
                selectedGenderPost: [action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

