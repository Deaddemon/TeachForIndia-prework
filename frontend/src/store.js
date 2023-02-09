import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { volunteerListReducer } from './reducers/volunteersReducer';
import { volunteerCreateReducer } from './reducers/volunteersReducer';

const reducer = combineReducers({
    volunteerList : volunteerListReducer,
    volunteerCreate : volunteerCreateReducer

});

const initialState = {
     
};

const middleware = [thunk];

const store =  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);



export default store;