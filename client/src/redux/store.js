import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import state from './state';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));

export default store;