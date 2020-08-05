import React from 'react';

export default class Category extends React.Component{


    render(){
        return(
        <div className="category">{this.props.category}</div>
        )
    }
}