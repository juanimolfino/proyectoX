import React, { useState } from 'react'; // { useState, useEffect, useRef }
// import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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

    const submit = (e) => {
        e.preventDefault();
        history.push('/'); // <-- Objeto history
      }

    return (
        <div>
            <form method='post' action='http://localhost:8080/post'  autoComplete='off' onSubmit={submit}>
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
                    <input type="submit" value='Enviar'/>
                </div>
            </form>
        </div>
    )
}


export default withRouter(FormPost)