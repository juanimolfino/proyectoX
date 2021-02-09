import { GET_GENDERS, GET_ALL_POST, GET_POST_BY_GENDER, POST_DELETED } from '../actions';


const initialState = {
    gendersDB: [],
    allPost: [],
    selectedGenderPost: [],
    postDeleted: []
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case GET_GENDERS:
            return {
                ...state,
                gendersDB: action.payload
            }
        case GET_ALL_POST:
            return {
                ...state,
                allPost: action.payload // de esta manera siempre que se llama este metodo pisa a los post existentes, es decir, refleja lo que tiene la DB
            }
            case POST_DELETED:
            return {
                ...state,
                postDeleted: state.postDeleted.concat(action.payload)
            }
        case GET_POST_BY_GENDER:
            return {
                ...state,
                selectedGenderPost: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

