import React from 'react';

const Photo = (props) => {

    const {large}=props.photo.picture

    return (
        <div className='photo-area'>
            <img large={large} src={large} alt=""/>
            
        </div>
    );
};

export default Photo;