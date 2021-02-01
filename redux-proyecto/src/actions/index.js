import axios from 'axios'

// CONSTS
export const EJEMPLO = 'EJEMPLO';
export const EJEMPLO2 = 'EJEMPLO2';
export const GET_GENDERS = 'GET_GENDERS';

// // FUNCION SINCRONA
// export function nombre(payload) {
//     return {
//         type: EJEMPLO,
//         payload
//     }
// }

// // FUNCION ASINCRONA
// export function nombre(input_para_url) {
//     return function(dispatch) {
//         return fetch(URL+INPUT)
//         .then(res => res.json())
//         .then(json => {
//             dispatch({
//                 type: EJEMPLO,
//                 payload: json
//             });
//         });
//     };
// };

// FUNCTION - CREA UN POST EN LA BD
export function createPost(input) {
    return function (dispatch) {
        return axios.post('http://localhost:8080/post', input)
            .then(() => console.log('Post Created'))
            .catch(err => {
                console.error(err);
            });
    }
};

// FUNCTION - TRAE LOS GENEROS DESDE LA BASE DE DATOS
export function getGenders() {
    return function (dispatch) {
        return fetch('http://localhost:8080/post/gender/getGender')
            .then(response => response.json())
            .then(data => {
                return dispatch({
                    type: GET_GENDERS,
                    payload: data
                });
            })
            .catch(error => console.log('hubo un error', error));
    }
}