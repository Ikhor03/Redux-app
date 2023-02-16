import { combineReducers, createStore } from "redux";
import counterReducer from "./counter-feature/reducer";


let rootReducers = combineReducers({
    counter: counterReducer
});

let store = createStore(rootReducers);

export default store;