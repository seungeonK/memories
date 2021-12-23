//import evertying as api from api folder
import * as api from '../api';

//create actions(Action Creators) -> functions that returns actions
//Action is an object that has type and payload
//With redux thunk, we have to add async,await keyword.

export const getPosts = () => async (dispatch) => {
    try {
        //First, get the respond from server
        //in response, we always have data(post)
        const { data } = await api.fetchPosts();
        //Dispatch the action with type and payload
        //And send the data through 'action.payload'
        dispatch( { type: "FETCH_ALL", payload: data} );
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH_ALL', payload: [] };
}