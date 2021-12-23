import mongoose from 'mongoose';

//create a model
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    //file will be converted
    selectedFile: String,
    likeCount: {
        type: Number, 
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);


//exporting a mongoose model from the postMessage file
export default PostMessage