import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './features/flights/flights.reducer';


const store = createStore(reducer,applyMiddleware(thunk))

export default store;





// export const userData = {
//   name: 'Nikola Tesla',
//   avatar_url: 'https://avatars3.githubusercontent.com/u10001',
// };

// export const UserDataContext = React.createContext(userData);