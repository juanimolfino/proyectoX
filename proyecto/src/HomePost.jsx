import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function HomePost({ history }) {
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
    .then(() => {
      history.go() // refresca la pagina entonces re renderizan los componentes
      // console.log(history) aca podes ver el objeto history para ver que nos sirve
    })
  }

  return (
    <div className="HomePost">
      {postsData.map((data, i) => <Post data={data} index={i} key={i} deletePost={deletePostById}/>)}
    </div>
  );
}

export default withRouter(HomePost)
