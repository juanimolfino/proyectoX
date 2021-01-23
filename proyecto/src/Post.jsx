import React from 'react'

function Post({data}){
    return (
        <div className='card'>
            <div className='card-body'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Post
