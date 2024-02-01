import React, {useState} from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";

export default function App() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const confirmUpdate = (event) =>{
    alert(` username is now ${userName} and email ${email}`);
    setSubmitted(true);
  }
  
  return (
    <React.Fragment>
      <div className="App">
        { !submitted ? 
          (
            <Form userName = {userName}
                  setUserName={setUserName}
                  email = {email}
                  setEmail = {setEmail}
                  confirm = {confirmUpdate}
            />
          ) : (
            <Confirmation userName = {userName}
                          email = {email}
            />
          )
        }
      </div>
    </React.Fragment>
  )
}

