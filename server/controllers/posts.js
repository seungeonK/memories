import mongoose from 'mongoose';
import PostMessage from '../models/PostMessage.js';

//handlers for the routers
// '/', GET method
export const getPosts = async (req, res) => {
    //everything 성공이면 try triggered
    try {
        console.log("server controller getPost in");
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//POST, create a post
export const createPost = async (req, res) => {
    console.log('server controller createPost in');
    console.log(req.body);
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    console.log('server controller updatePost in');
    //get the value from req.params.id object
    const { id: _id } = req.params;
    //post is an object that has like { title: , name: , message: ,}
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}


export const deletePost = async (req, res) => {
    console.log('server controller deletePost in');
    
    console.log(req.params);
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndDelete(id);

    res.json({ message: "post Deleted Successfully "});

}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    //retrieve id from DB
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);

}
//https://www.restapitutorial.com/