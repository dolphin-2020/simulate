import React, { Component } from 'react';
import './App.css'
export default class CommentUi extends Component{
  render(){
    return (
      <div>
      {
        this.props.data.map((item,index)=>{
          return(
            <div key={index} className="information">
              <div className="imgDiv">
                <img src="../src/head.jpg" className="headerImg" alt=""/>
              </div>
              <div className="commentDiv"></div>
                <p className="time">{new Date().toLocaleDateString()+" "+ new Date().toLocaleTimeString()}</p>
              <div className="comment">
                <p className="items">{item}</p>
              </div>
            </div>
          )
        })
      }
     </div>
    )
  }

}