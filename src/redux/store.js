import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers,applyMiddleware(thunk))
// create the combined reducers i.e. of all the reducers here only for the one 