import React, { useState, useEffect } from 'react'; // { useState, useEffect, useRef }
import { withRouter } from 'react-router-dom'; // esto me permite traer el history para usarlo
import axios from 'axios'

import Gender from './genders.jsx';

// REDUX
// import { connect } from 'react-redux'; // nos permite conectar el componente de react con redux, nos habilita las props q necesita como estados del store redux y funciones de actions
// import addTodo from '../actions' ejemplo

// luego podemos usar por props las actions y los estados, props.blabla
// un ejemplo de uso seria disparar un actions importado/conectado para usar para disparar un fetch o algo con useEffect al cargar la pagina


function FormPost({ history }) { // el history lo importo con withrouter, supuestamente te sirve para manejar el historial del navegador

// REACT STATES
    // State to DB
    const [input, setInput] = useState({
        title: '',
        description: '',
        gender: '',
    })
    // State to get genders from DB
    const [gendersDB, setGendersDB] = useState([]);


// USE EFFECT

useEffect(() => {
    fetch('http://localhost:8080/post/gender/gender')
    .then(response => response.json())
    .then(data => {
        setGendersDB(data)
       })
    .catch(error => console.log('hubo un error', error));
}, []);

// FUNCTIONS
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }       
    const handleSubmit = (event) => {
        event.preventDefault();
        axios //es como el fetch, pero con fetch el objeto me llegaba bacio a la base de datos
        .post('http://localhost:8080/post', input)
        .then(() => console.log('Post Created'))
        .then(() => history.push('/'))
        .catch(err => {
        console.error(err);
            });
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
                             {gendersDB.map((data, i) => <Gender data={data} key={i}/>)}     {/* se necesita 1 componente para mostrar el listado */}                   
                    </select>
                </div>
                <div>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
        </div>
    )
}


// function mapStateToProps(state) {
//     return {
//       movie: state.movieDetail
//     }
//   }



export default withRouter(FormPost)
// export default connect(null, {addTodo} )(AddTodo);
// export default connect(mapStateToProps, {getTodoDetail})(TodoDetail)