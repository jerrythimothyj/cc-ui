import creditCardReducer from "./containers/credit-card/credit-card.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({creditCardReducer})

export default rootReducer