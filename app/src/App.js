import React,{Component,Fragment} from 'react';
import Header from './header'
import InputUi from './inputUi'
import CommentUi from './commentUi'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      input:'',
      userInfo:[
        "React has been designed from the start for",
        "React has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start for",
        "React has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start for",
        "React has been designed from the start for",
         "React has been designed from the start for", 
         "React has been designed from the start for",
        "React has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start for",
        "React has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start forReact has been designed from the start for",
      ]
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
          name={this.state.name}
          input={this.state.input}
        />
        <CommentUi
           data={this.state.userInfo}
        />
      </Fragment>
    );
  } 

  addStatus(e){
    this.setState({
     name:e.target.value,
    })
  }

  messageInput(e){
    this.setState({
      input:e.target.value,
    })
  }

  submit(){
    this.setState({
      userInfo:[this.state.input,...this.state.userInfo],
      name:'',
      input:'',
    })
  }
}

export default App;
