import React, { useState, useEffect } from 'react';
import Post from './Post'
import axios from 'axios'

function HomePost() {
  const [postsData, setPostsData] = useState([]);
  useEffect(function () {
    fetch('http://localhost:8080/post')
      .then(response => response.json())
      .then(data => {
        setPostsData(data);
        console.log(data)
      })
      .catch(error => console.log('hubo un error', error));
  }, [])

  function deletePostById(id) {
    axios.delete(`http://localhost:8080/post/deletePost`, {data: {_id: id}})
  }

  return (
    <div className="HomePost">
      {/* <button onClick={() => {getUsers()}}></button> */}
      {postsData.map((data, i) => <Post data={data} index={i} key={i} deletePost={deletePostById}/>)}
    </div>
  );
}

export default HomePost;
