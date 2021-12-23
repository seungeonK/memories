import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//route import
import postRoutes from './routes/posts.js';

const app = express();

//middleware, starting path for all the routes

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://seungeonk:ks741852@cluster0.jw871.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

//thses two codes made sure that there's no any errors in console
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((err) => console.log(err.message));



app.get('/', (req,res) => {
    res.send("/ works");
})
// mongoose.set('useFindAndModify', false);