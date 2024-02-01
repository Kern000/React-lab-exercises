import React from 'react';

export default function Confirmation(props){

    return (
        <React.Fragment>
            <div>
                <h1> Confirmation </h1>
                <ul>
                    <li> Username in state: {props.userName}</li>
                    <li> Email in state: {props.email}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}