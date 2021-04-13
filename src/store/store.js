import {createStore,applyMiddleware} from 'redux';
import listReducer from '../reducer/listreducer';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(listReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;