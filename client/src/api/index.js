import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => {
    console.log('axios.get in');
    axios.get(url).then((res) => console.log(res.data));
    return axios.get(url);
}
export const createPost = (newPost) => {
    console.log('axios.createPost in');
    console.log(newPost);
    //axios.post(url, data = req.body) when passed to server
    return axios.post(url, newPost);
}
export const updatePost = (id, updatedPost) => {
    console.log('api.updatePost() in')
    return axios.patch(`${url}/${id}`, updatedPost)
};

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
}

export const likePost = id => {
    console.log('api likePost in');
    return axios.patch(`${url}/${id}/likePost`);
}