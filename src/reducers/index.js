import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoin";
import balanceReducer from "./balance";

export default combineReducers({
	balance: balanceReducer,
	bitcoin: bitcoinReducer
})
