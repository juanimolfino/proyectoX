import React, { useState, useEffect } from 'react'; // { useState, useEffect, useRef }
import { withRouter } from 'react-router-dom'; // esto me permite traer el history para usarlo

import Gender from './genders.jsx';

// REDUX
import { connect } from 'react-redux'; // nos permite conectar el componente de react con redux, nos habilita las props q necesita como estados del store redux y funciones de actions
// import addTodo from '../actions' ejemplo
import { createPost, getGenders } from '../actions'

// luego podemos usar por props las actions y los estados, props.blabla
// un ejemplo de uso seria disparar un actions importado/conectado para usar para disparar un fetch o algo con useEffect al cargar la pagina

function FormPost({ history, createPost, getGenders, genders }) { // el history lo importo con withrouter, supuestamente te sirve para manejar el historial del navegador
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
        .then(() => history.push('/'));
        };
        
// RENDER
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
                            <option value="">Choose...</option>                                 
                           {genders.map((data, i) => <Gender data={data} key={i}/>)}            {/* genders esta traido de redux */}   
                    </select>
                </div>
                <div>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
        </div>
    )
}


function mapStateToProps(state) {
    return {
      genders: state.gendersDB // si necesitas mas propiedades del store las agregas al objeto. el nombre de la izquierda no importa le pones el que quieras.
    }
  }


export default connect( mapStateToProps, { createPost, getGenders })(withRouter(FormPost));
// export default connect( mapStateToProps, { createPost, getGenders })(FormPost);