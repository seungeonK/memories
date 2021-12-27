// reducer is a function that accpets a state and an action
export default (states = [], action) => {
    switch(action.type){
        case 'DELETE':
            //filter out the one we deleted
            //keep all states except the one matching with the id
            return states.filter((post) => {
                return post._id !== action.payload;
            })
        case 'FETCH_ALL':
            //action.payload is actual post
            return action.payload;
        case 'CREATE':
            console.log('createPost reducer in');
            console.log([...states]);
            //add action.payload(=data) in exsisting states
            return [...states, action.payload];
        //update and like behaves same
        case 'UPDATE':
        case 'LIKE':
            //action.payload => updated post
            //looping through states and if we find the id that we used for updating,
            //use that updated payload, for all other states, keep them as they are.
            return states.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return states;
    }
};