import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import moviesData from './Reducers/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

 const store = createStore(moviesData,composeWithDevTools( applyMiddleware(thunk)));

export default store