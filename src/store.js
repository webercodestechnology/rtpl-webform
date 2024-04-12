import {createStore, combineReducers, applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import formReducer from "./reducers/FormReducer";
import visitorReducer from "./reducers/visitorReducer";

const rootReducer = combineReducers({
    formData:formReducer,
    visitorDetails:visitorReducer
})


const middleware = [thunk];

const store = createStore(rootReducer,applyMiddleware(...middleware))


export default store;