import React, { useState } from 'react'; // { useState, useEffect, useRef }
// import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

function FormPost({ history }) {
    const [input, setInput] = useState({
        title: '',
        description: '',
        gender: '',
       // subGender: ''
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // function onSubmit(){
    //     return  <Redirect  to="/" />
    //  }

    // onSubmit={(e) => {
    //     e.preventDefault();
    //     onSubmit()
    // }}

        
  const handleSubmit = (event) => {
    event.preventDefault();
    axios //es como el fetch, pero con fetch el objeto me llegaba bacio a la base de datos
    .post('http://localhost:8080/post', input)
    .then(() => console.log('Post Created'))
    .catch(err => {
      console.error(err);
    });
};
    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name='title' value={input.title} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>description:</label>
                    <input type="text" name='description' value={input.description} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Choose a Gender:</label>
                    <select id="gender" name="gender" onChange={handleInputChange}>
                        <option value="cars">Cars</option>
                        <option value="garden">Garden</option>
                        <option value="drugs">Drugs</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
        </div>
    )
}


export default withRouter(FormPost)