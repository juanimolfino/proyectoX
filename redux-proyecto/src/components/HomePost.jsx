import React, { useEffect } from 'react';
import '../syles/HomePost.css';
import Post from './Post';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPost, deletePostById } from '../actions';


function HomePost({ history, getAllPost, allPost, deletePostById, postDeleted }) {

  useEffect(() => {
    getAllPost()
  }, [getAllPost, postDeleted])


  function handleDeletePost(id) {
    deletePostById(id)
  }

  return (
    <div className="HomePost">
      {allPost.map((data, i) => {
          return <Post data={data} index={data._id} key={i} deletePost={handleDeletePost} />
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allPost: state.allPost,
    postDeleted: state.postDeleted 
  }
}

export default connect(mapStateToProps, { getAllPost, deletePostById })(withRouter(HomePost));
