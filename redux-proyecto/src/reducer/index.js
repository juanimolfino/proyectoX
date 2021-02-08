import { GET_GENDERS, GET_ALL_POST, GET_POST_BY_GENDER, 
    //    GET_POST_BY_ID, HANDLE_UPDATE_FORM
} from '../actions';


const initialState = {
    gendersDB: [],
    allPost: [],
    selectedGenderPost: [],
    //specificPost: {}
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
                allPost: state.allPost.concat(action.payload)
            }
        case GET_POST_BY_GENDER:
            //console.log(action)
            return {
                ...state,
                selectedGenderPost: action.payload
            }
        // case GET_POST_BY_ID:
        //     // console.log(action.payload)
        //     return {
        //         ...state,
        //         specificPost: { ...action.payload }
        //     }
        // case HANDLE_UPDATE_FORM:
        //     // console.log(action.payload)
        //     return {
        //         ...state,
        //         specificPost: { ...action.payload }
        //     }
        default:
            return {
                ...state
            }
    }
}

