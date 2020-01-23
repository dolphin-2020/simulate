import React,{Component,Fragment} from 'react';
import Header from './header'
import InputUi from './inputUi'
import CommentUi from './commentUi'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
    this.addStatus=this.addStatus.bind(this);
    this.messageInput=this.messageInput.bind(this);
    this.submit=this.submit.bind(this);
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <InputUi 
          addStatus={this.addStatus} 
          messageInput={this.messageInput} 
          submit={this.submit} 
        />
        <CommentUi/>
      </Fragment>
    );
  } 
addStatus(){
  return ;
}

messageInput(){
  return;
}

submit(){
  return ;
}
}

export default App;
