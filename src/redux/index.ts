import { combineReducers } from "redux";
import { birthdayReducer, modalReducer } from "./reducers";

const rootReducer = combineReducers<any>({
  birthday: birthdayReducer,
  modal: modalReducer,
});

export default rootReducer;
