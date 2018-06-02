import { combineReducers } from "redux";
import userReducer from './reducers/userReducer';
import issuerReducer from './reducers/issuerReducer';
import badgeReducer from './reducers/badgeReducer';
export default combineReducers({
    userClass: userReducer,
    issuerClass: issuerReducer,
    badgeClass: badgeReducer,
});