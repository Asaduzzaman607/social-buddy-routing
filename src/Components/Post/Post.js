import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const Post = (props) => {
    console.log(props.post)

    const{title,body,id} = props.post

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (

        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} col-lg-6 col-md-6 col-sm-12 col-12 m-4 style={{maxWidth: '18rem' }} color="textSecondary" gutterBottom>
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
       <Link to={`/postDetails/${id}`}><Button variant="contained" color="primary" size="small">Learn More</Button></Link>
        
      </CardActions>
    </Card>
        
    );
};

export default Post;