import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostDetails = () => {


    const {postId} = useParams ();

    const[postDetails, setPostDetails]= useState([]);

    const {title,body,id} = postDetails

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    },[])

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  

    return (

        <Card className={classes.root} col-lg-6 col-md-6 col-sm-12 col-12 m-4 style={{maxWidth: '18rem' }} flexDirection="row">
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
          Title: {title}
        </Typography>
        <Typography variant="h5" component="h2">
          Welcome
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Id: {id}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Learn More</Button>
        
      </CardActions>
    </Card>
      
    );
};

export default PostDetails;