import React from 'react';

const Comment = (props) => {

    const {name,body,email}=props.comment
   

    return (
        
            <div className='comment-box'>
            <h3>Name:{name}</h3>
            <h4>email:{email}</h4>
             <p>{body}</p>
            </div>

        
    );
};

export default Comment;