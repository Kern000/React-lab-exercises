import React from 'react';

export default class NumberBox extends React.Component{

    state = {
        count: 10,
        count2: this.props.initialValue
    }
    // we create the state object here

    printState (){
        console.log(this.state);
    }

    // when we extend React.Component, we inherit the render method
    render(){

        this.printState();

        return (
            <React.Fragment>
                <div style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"200px"
                }}>This is the demo for class NumberBox: {this.state.count}</div>

                <div style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"200px"
                }}>This is the demo for class NumberBox: {this.state.count2}</div>
            </React.Fragment>
        )
    }
}

