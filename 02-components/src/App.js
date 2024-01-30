import React from 'react';
import Alert from './Alert.js';
import NumberBox from './NumberBox.js';

// function that returns a string
function sayGoodbye(){
  return "Goodbye";
}

// function that returns html element
function displayHeader(){
  return (
    <h2>About Me</h2>
  )
}

// function that returns jsx element
function ImageFrame(){
  return(
    <img src={require("./dog.jpg")} alt="puppy" /> 
  )
}

// passing props, put in props into argument
// we are just accessing the whatever_message property in the props object

function DisplayMessage(props){
  return (
    <div>{props.whatever_message}</div>
  )
}

// by putting attribute whatever_message we are passing in the parameter to the props object

function App() {
  return (
    <React.Fragment>
      <h1> Hello World </h1>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <ImageFrame />
      <DisplayMessage whatever_message="Hello there" />
      <Alert message="This is the message from imported component" />
      <NumberBox initialValue={23}/>
    </React.Fragment>
  )
}

export default App;
