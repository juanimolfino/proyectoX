import React, { useState, useEffect } from 'react';
import Post from './Post'
import {useParams} from 'react-router'
import { withRouter } from 'react-router-dom';
import axios from 'axios'

function GenderPost({ history }) {
    const { gender } = useParams(); //con esto saco los params que me vienen en el URL (/:gender)
    // console.log(gender)
    const [postsData, setPostsData] = useState([]);
    useEffect(function () {
        fetch(`http://localhost:8080/post/${gender}`)
        .then(response => response.json())
        .then(data => {
          setPostsData(data);
          //console.log(data)
        })
        .catch(error => console.log('hubo un error', error));
    }, [gender])

    function deletePostById(id) {
        axios.delete(`http://localhost:8080/post/deletePost`, { data: { _id: id } })
        .then(() => console.log('LLEGUE'))
        .then(() => {
            history.go();
            })
        .catch(err => console.log(err))
    }

    return (
        <div className="HomePost">
            {postsData.map((data, i) => <Post data={data} index={i} key={i} deletePost={deletePostById} />)}
        </div>
    );

}


export default withRouter(GenderPost)