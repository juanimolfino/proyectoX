import React, { useState, useEffect } from 'react'; // { useState, useEffect, useRef }
import { withRouter } from 'react-router-dom'; // esto me permite traer el history para usarlo

import Gender from './genders.jsx';

// CSS
import '../syles/form.css'

// BOOTSTRAP
import { Button } from 'react-bootstrap'

// REDUX
import { connect } from 'react-redux'; 
import { createPost, getGenders } from '../actions'



function FormPost({ history, createPost, getGenders, genders }) { 
// REACT STATES
    // State to DB
    const [input, setInput] = useState({
        title: '',
        description: '',
        gender: '',
    })

// USE EFFECT
useEffect(() => {
    getGenders() // esta funcion trae los generos cargados en la DB
}, [getGenders]);


// FUNCTIONS
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }       

    function handleSubmit(e) {
        e.preventDefault();
        createPost(input) // Actions redux - crea en la base de datos un post
        .then(() => {
            history.push('/');
            history.go();
        });
        };
        
// RENDER
    return (
        <div className='containerForm'>
            <form autoComplete='off' onSubmit={handleSubmit} className='FormCompleted'>
                <div>
                    <label className='labelDetail'>Titulo:</label>
                    <input type="text" name='title' value={input.title} onChange={handleInputChange} className='inputDetail'/>
                </div>
                <div>
                    <label className='labelDetail'>Descripción:</label>
                    <input type="text" name='description' value={input.description} onChange={handleInputChange} className='inputDetail'/>
                </div>
                <div>
                    <label className='labelDetail'>Género:</label>
                    <select id="gender" name="gender" onChange={handleInputChange} className='inputDetailSelect'>
                            <option value="">Selecciona...</option>                                 
                           {genders.map((data, i) => <Gender data={data} key={i}/>)}            {/* genders esta traido de redux */}   
                    </select>
                </div>
                <div className='inputButtonDetail'>
                    <Button type="submit" variant="outline-danger">Guardar</Button>
                </div>
            </form>
        </div>
    )
}


function mapStateToProps(state) {
    return {
      genders: state.gendersDB
    }
  }


export default connect( mapStateToProps, { createPost, getGenders })(withRouter(FormPost));
