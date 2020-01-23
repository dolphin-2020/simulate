import React from 'react';

export default function CommentUi(){
  return (
    <div className="information">
      <div className="imgDiv">
        <img src="../src/head.jpg" className="headerImg" alt=""/>
      </div>
      <div className="commentDiv">
        <p className="time">Just Now</p>
        <div className="comment">
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, harum?</p>
        </div>
      </div>
    </div>
 )
}