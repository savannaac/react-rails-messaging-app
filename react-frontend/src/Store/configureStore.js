import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from "../Reducers/RootReducer";

const loggerMiddleware = createLogger();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
    return store
}

export default configureStore