import React from 'react'
import '../syles/Post.css' 
function Post({data, index, deletePost}){
    return (
        <div className='Post' key={index}>
            <div className='card-body'>
            <h1>{data.title}</h1>
            <h4>{data.gender? data.gender.gender : ''}</h4>
            <p>{data.description}</p>
            <button onClick={() => deletePost(data._id)}>Delete</button> {/* Le paso una funcion por props, aca se la asigno al boton, este la dispara y le pasa el id en cuestion */}
            </div>
        </div>
    )
}

export default Post
