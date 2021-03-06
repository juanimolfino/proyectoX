import axios from 'axios'

// CONSTS
export const GET_GENDERS = 'GET_GENDERS';
export const GET_ALL_POST = 'GET_ALL_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST_BY_GENDER = 'GET_POST_BY_GENDER';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const POST_DELETED = 'POST_DELETED'


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

// FUNCTION - TRAE LOS POSTS DESDE LA BASE DE DATOS
export function getAllPost() {
    return function (dispatch) {
        return fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(response => {
                return dispatch({
                    type: GET_ALL_POST,
                    payload: response
                });
            })
            .catch(error => console.log('hubo un error', error));
    }
}

// FUNCTION - TRAE LOS POST DESDE LA BASE DE DATOS PASANDOLE EL GENERO QUE QUEREMOS
export function getPostByGender(gender) {
    return function (dispatch) {
        fetch(`http://localhost:8080/post/${gender}`)
            .then(response => response.json())
            .then(response => {
                 dispatch({
                    type: GET_POST_BY_GENDER,
                    payload: response
                })
            })
            .catch(error => console.log('hubo un error', error));
    }
}

// FUNCTION - ELIMINA UN POST POR ID
export function deletePostById(id) {
    return function (dispatch) {
        axios.delete(`http://localhost:8080/post/deletePost`, { data: { _id: id } })
        .then(() => {
            dispatch({
                type: POST_DELETED,
                payload: id
            })
        })
    }
}

// FUNCTION - TRAE UN POST DE LA BASE DE DATOS POR SU ID
export function getPostById(id) {
    return function (dispatch) {
        fetch(`http://localhost:8080/post/postById/${id}/`)
            .then(response => response.json())
            .then(response => {
                 dispatch({
                    type: GET_POST_BY_ID,
                    payload: response
                })
            })
            .catch(error => console.log('hubo un error', error));
    }
}
