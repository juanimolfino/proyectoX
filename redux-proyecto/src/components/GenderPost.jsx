import React, { useEffect } from 'react';
import Post from './Post'
import { useParams } from 'react-router'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { getPostByGender } from '../actions'

function GenderPost({ history, getPostByGender, postsData }) {
    const { gender } = useParams(); //con esto saco los params que me vienen en el URL (/:gender)
    // console.log(gender)

    useEffect(function () {
        getPostByGender(gender)
    }, [getPostByGender, gender])
    // function GenderPost({ history }) {
    //     const { gender } = useParams(); //con esto saco los params que me vienen en el URL (/:gender)
    //     // console.log(gender)
    //     const [postsData, setPostsData] = useState([]);
    //     useEffect(function () {
    //         fetch(`http://localhost:8080/post/${gender}`)
    //         .then(response => response.json())
    //         .then(data => {
    //           setPostsData(data);
    //           //console.log(data)
    //         })
    //         .catch(error => console.log('hubo un error', error));
    //     }, [gender])



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
            {postsData.map((data) => {
                if (data) {
                    return <Post data={data} index={data._id} key={data._id} deletePost={deletePostById} />
                }
            })}
        </div>
    //     <div className="HomePost">
    //     {allPost.map((data) => {
    //       if (data) {
    //         return <Post data={data} index={data._id} key={data._id} deletePost={handleDeletePost} />
    //       }
    //     })}
    //   </div>
    );

}

function mapStateToProps(state) {
    return {
        postsData: state.selectedGenderPost,
    }
}

export default connect(mapStateToProps, { getPostByGender })(withRouter(GenderPost))
