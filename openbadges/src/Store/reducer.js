import { combineReducers } from "redux";
import userReducer from './reducers/userReducer';
import issuerReducer from './reducers/issuerReducer';

export default combineReducers({
    userClass: userReducer,
    issuerClass: issuerReducer,
});