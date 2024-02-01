import React from 'react';

export default function Form (props){

    return (
        <React.Fragment>
            <div> 
                <label> User Name </label>
                <input  type="text"
                        name="userName"
                        value={props.userName}
                        onChange={(event)=> props.setUserName(event.target.value)}
                />
            </div>
            <div>
                <label> Email </label>
                <input  type="text"
                        name="email"
                        value={props.email}
                        onChange={(event)=> props.setEmail(event.target.value)}
                />
            </div>
            <button onClick={props.confirm}> Confirm </button>
        </React.Fragment>
    )
}