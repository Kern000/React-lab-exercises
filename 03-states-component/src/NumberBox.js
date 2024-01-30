import React, {useState} from 'react';

// when you npm start, you should be in the folder where you created the react proj

export default function NumberBox (props){

  const [count, setCount] = useState(props.initialValue)

  return (
      <div style={{
                  border:"1px solid black",
                  padding:"10px",
                  width:"20px"
      }}> {count} </div>
  )
}