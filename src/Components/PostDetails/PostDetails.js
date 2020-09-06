import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../../Components/Comment/Comment'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo from '../Photo/Photo';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const PostDetails = () => {

    const { pId } = useParams();


    // post load section

    const [postDetails, setPostDetails] = useState([])

    const {id,title,body}= postDetails // destructing from postDetails

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${pId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [])

   

    // comments load section
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    
    
    // random users picture load section
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
            .then(res => res.json())
            .then(data => setPhoto(data.results))
    }, [])
    

   // filtering relevant comments
    const relevantComment = comment.filter(object => parseInt(object.postId) === parseInt(pId))
    let commentLength = relevantComment.length;
    console.log(commentLength);

    // filtering relevant photo

    const relevantPhoto = photo.slice(1, commentLength + 1)
    console.log(relevantPhoto);

    // class of mu

    const classes = useStyles();

    return (
 
     <div className={classes.root}>
     <Grid container spacing={0} style={{backGroundColor:'#343A40'}} >
       <Grid item xs={12} >
       <h1>Details of Post id: {id}</h1>
                          <Paper className={classes.paper} style={{backgroundColor:'#43413F', color:'#ffff'}}>
                           <h2>Title: {title}</h2>
                         <p>Body: {body}</p>
    
    
                         </Paper>
                         <h1>Comments</h1>
       </Grid>
       <Grid item xs={2} >
         <Paper className={classes.paper} style={{backgroundColor:'#43413F', color:'#ffff'}}>{
                                relevantPhoto.map(photo => <Photo photo={photo}></Photo>)
                            }</Paper>
       </Grid>
       <Grid item xs={10}>
         <Paper className={classes.paper} style={{backgroundColor:'#43413F', color:'#ffff'}}>{
                                relevantComment.map(comment => <Comment comment={comment}></Comment>)
                            }</Paper>
       </Grid>
       
     </Grid>
   </div>

    );
};

export default PostDetails;