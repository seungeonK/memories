import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// to dispatch the actions
import { useDispatch } from 'react-redux';
 
import { getPosts } from './actions/posts.js';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import memories from './images/memories.png'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    //hook, useDispatch()
    const dispatch = useDispatch();
    //useEffect == componentDidUnMount
    useEffect(() => {
        //inside dispatch(), put actions such as getPosts
        dispatch(getPosts());
        //second parameter is a dependency list
    }, [currentId, dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;