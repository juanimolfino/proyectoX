import { createStore, applyMiddleware } from 'redux'; // el apply sirve para el uso de appis o DB entre actions y reducer
import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
        rootReducer, // el reducer en si
        composeWithDevTools(applyMiddleware(thunkMiddleware)) // sirve para ver como funciona redux en el browser // sirve para las async actions
    );

export default store; // lo usa el index.js para pasarlo por provider



