import { combineReducers } from 'redux';
import authReducer from "./Authorisation/reducer";

const RootReducer = combineReducers({
  auth: authReducer
})
export default RootReducer;