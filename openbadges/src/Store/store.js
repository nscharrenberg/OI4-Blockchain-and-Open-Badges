import { applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './reducer';

const logger = (store) => (next) => (action) => {
    console.log("Action Fired", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("AAAAAHHHH!", e);
    }
};

const middleware = applyMiddleware(logger, error);

export default createStore(reducers, middleware);