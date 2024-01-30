import React, {useState} from 'react';

// when you npm start, you should be in the folder where you created the react proj

export default function NumberBox (props){

  const [count, setCount] = useState(props.initialValue)

  const click = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
      <React.Fragment>
        <div  onClick={click} // notice there we are not calling the function here
              style={{
                    border:"1px solid black",
                    fontSize: `${10 + count * 2}px`, // no spacing before px
                    padding:"10px",
                    display: "inline-block" // inline-block takes the size of its contents
        }}> {count} </div>
        {count % 2 === 0 ? <p> Number is even </p> : null}
      </React.Fragment>
  )
}



