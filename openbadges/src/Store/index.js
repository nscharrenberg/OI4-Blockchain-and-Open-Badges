import { applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './reducer';

/*const initialState = {
	name: 'Kasper'
};

const nameHolder = (state = initialState, action) => {
	//console.log('Name Holder: ', action)
	return state
};*/

const store = createStore(reducers);

export default store;