export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            //action.payload is actual post
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
};