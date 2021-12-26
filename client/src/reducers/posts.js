// reducer is a function that accpets a state and an action
export default (posts = [], action) => {
    switch(action.type){
        case 'DELETE':
            //filter out the one we deleted
            //keep all posts except the one matching with the id
            return posts.filter((post) => {
                return post._id !== action.payload;
            })
        case 'FETCH_ALL':
            //action.payload is actual post
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            //action.payload => updated post
            //looping through posts and if we find the id that we used for updating,
            //use that updated payload, for all other posts, keep them as they are.
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
};