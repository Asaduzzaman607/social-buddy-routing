import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Post = (props) => {
    

    const{title,body,id} = props.post


    const classes = useStyles();

    return (

    
    <div className={classes.root} style={{backgroundColor:'#343A40'}}>
      <Grid container spacing={0} >
        <Grid item xs={12}>
          <Paper className={classes.paper}><Card  display="flex" className={classes.root}>
     <CardActionArea style={{backgroundColor:'#43413F', color:'#ffff'}}>
       <CardContent style={{color:'#ffff'}}>
       <Typography style={{color:'#ffff'}} gutterBottom  color="textSecondary" component="p">
         Social Buddy {id}
         </Typography>
         <Typography gutterBottom variant="h5" component="h2">
         Title: {title}
         </Typography>
         <Typography style={{color:'#ffff'}} variant="body2" color="textSecondary" component="p">
         {body}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         <Link style={{alignItems: 'center', textDecoration: 'none'}} to={`/postDetails/${id}`}><Button  variant="contained" color="primary" size="small">See Details</Button></Link>
         </Typography>
         
       </CardContent>
     </CardActionArea>
   </Card> 
   </Paper>
      </Grid>

      </Grid>
    </div>
        
    );
};

export default Post;