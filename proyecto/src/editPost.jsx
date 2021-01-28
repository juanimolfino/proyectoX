import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './editPost.css'

function EditPost({ id, history }) {
//console.log('soy el HISTORY',history)
    // STATES
    const [postDataById, setPostDataById] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        fetch(`http://localhost:8080/post/postById/${id}/`)
            .then(response => response.json())
            .then(post => {
                setPostDataById(
                    post
                );
            })
            .catch(error => console.log('hubo un error', error));
    }, [id]) // si usamos aca adentro un valor de un estado que se actualiza y depende del use efect y se vuelve a actualizar, loopea hasta infinito 

    function handleChangeInput(e) {
        setPostDataById({
            ...postDataById,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdate(e) {
        e.preventDefault();
        axios.put('http://localhost:8080/post/updatePost', postDataById)
        .then(() => console.log('Post Update'))
        .then(() => {
            //history.go()
            history.push('/')}
        )
        .catch(err => {
            console.error(err);
                });
    }

    //console.log(postDataById)
    return (
        <div>
            <form className='containerInputEdit' onSubmit={handleUpdate}>
                <input type="text" value={postDataById.title} onChange={handleChangeInput} name="title" className='inputConfig' />
                <textarea type="text" value={postDataById.description} onChange={handleChangeInput} name="description" className='textareaConfig' />
                <input type="submit" value='Enviar'/>
            </form>  
        </div>

    )
}

export default withRouter(EditPost)