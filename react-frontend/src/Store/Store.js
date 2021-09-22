import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "../Reducers/User";

const rootReducer = combineReducers({
    user: User
});

const configureStore = () => {
    return createStore(
        rootReducer, 
        compose(applyMiddleware(thunk))
    );
};

export default configureStore;