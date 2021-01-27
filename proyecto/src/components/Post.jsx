import React from 'react'
import '../syles/Post.css' 
function Post({data, index, deletePost}){
    return (
        <div className='Post' key={index}>
            <div className='card-body'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <button onClick={() => deletePost(data._id)}>Delete</button>
            </div>
        </div>
    )
}

export default Post
