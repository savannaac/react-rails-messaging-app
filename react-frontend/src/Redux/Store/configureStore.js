import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from "../Reducers/RootReducer";

// variable to initialize a new instance of Redux logger
const loggerMiddleware = createLogger();

// creates a function & sets it to variable configureStore
// passes rootReducer/reducers to createStore()
const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                // allows async use of dispatch
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
    // function returns store object, which is passed to Provider to be rendered at the top of the component tree
    return store
}

export default configureStore