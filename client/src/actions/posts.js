//import evertying as api from api folder
import * as api from '../api/index';

//create actions(Action Creators) -> functions that returns actions
//Action is an object that has type and payload
//With redux thunk, we have to add async,await keyword.

export const getPosts = () => async (dispatch) => {
    try {
        //First, get the respond from server
        //api returns a response. we just need a response.data
        // destructuring
        console.log('action.getPosts in');
        const { data } = await api.fetchPosts();
        //Dispatch the action with type and payload
        //And send the data through 'action.payload'
        dispatch( { type: "FETCH_ALL", payload: data} );
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH_ALL', payload: [] };
}


export const createPost = post => async (dispatch) => {
    try {
        console.log("actions createPost in");
        const promise = await api.createPost(post);
        console.log(promise);
        const { data } = promise;
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        //updatePost returns response. and we get response.data
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = id => async(dispatch) => {
    try {
        const { data } = await api.likePost(id);

        //pass it into reducer
        dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
        
    }
}