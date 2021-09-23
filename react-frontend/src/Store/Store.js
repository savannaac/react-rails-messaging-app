import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../Reducers/RootReducer";

export const Store = () => {
    return createStore(
        rootReducer, 
        compose(applyMiddleware(thunk))
    );
};