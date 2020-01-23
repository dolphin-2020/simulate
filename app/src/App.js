import React,{Fragment} from 'react';
import Header from './header'
import InputUi from './inputUi'
import CommentUi from './commentUi'
import './App.css';


function App() {
  return (
    <Fragment>
      <Header/>
      <InputUi/>
      <CommentUi/>
    </Fragment>
  );
}

export default App;
