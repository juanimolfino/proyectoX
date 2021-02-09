import React, { useEffect } from 'react';
import '../syles/HomePost.css';
import Post from './Post';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPost, deletePostById } from '../actions';


function HomePost({ history, getAllPost, allPost, deletePostById, postDeleted }) {
  // const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    getAllPost()
    console.log(postDeleted)
  }, [getAllPost,postDeleted])

  function handleDeletePost(id) {
    deletePostById(id)
     // refresca la pagina entonces re renderizan los componentes
    // console.log(history) aca podes ver el objeto history para ver que nos sirve

  }

  return (
    <div className="HomePost">
      {allPost.map((data) => {
        //if (data) {
          return <Post data={data} index={data._id} key={data._id} deletePost={handleDeletePost} />
        //}
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
