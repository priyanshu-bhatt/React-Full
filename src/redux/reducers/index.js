import { combineReducers } from "redux";
import reducer from "./amountreducer";

const reducers= combineReducers({
    amount: reducer,
    //Give the all the reducers you want to combine
})
export default reducers