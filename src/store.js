import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './features/flights/flights.reducer';


const store = createStore(reducer,applyMiddleware(thunk))

export default store;


