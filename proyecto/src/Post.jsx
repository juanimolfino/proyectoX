import React from 'react'
import { NavLink } from 'react-router-dom';

function Post({data, index, deletePost}){
    return (
        <div className='card' key={index}>
            <div className='card-body'>
        <NavLink to={`/edit/${data._id}`}>
            <h1>{data.title}</h1>
        </NavLink>
            <p>{data.description}</p>
            <button onClick={() => deletePost(data._id)}>Delete</button> {/* Le paso una funcion por props, aca se la asigno al boton, este la dispara y le pasa el id en cuestion */}
            </div>
        </div>
    )
}

export default Post
