import { combineReducers } from "redux";

//import 
import posts from './posts';

//object inside
//all of the individual reducers inside
export default combineReducers({
    posts: posts,
});