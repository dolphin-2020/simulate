import React from 'react'

export default function InputUi(){
  return (
   <form id="container">
   <input id="info" type='text' placeholder="Add You Status"/>
   <input id="input" type="text" placeholder="Message goes here"/>
   <div id="submit"><button id="post">Post</button></div>
 </form>
  )
}