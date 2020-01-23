import React,{Component} from 'react'

export default class InputUi extends Component{
  render(){
    return (
      <form id="container">
      <input id="info" type='text' placeholder="Add You Status" onChange={this.props.addStatus}/>
      <input id="input" type="text" placeholder="Message goes here" onChange={this.props.messageInput}/>
      <div id="submit"><button id="post" onClick={this.props.submit}>Post</button></div>
    </form>
     )
   }
  }
