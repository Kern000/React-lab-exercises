import React from 'react'; //ES6 way of importing
import "./styles.css";

function App() {
  return(
    <React.Fragment>
      <h1> Hello World!</h1>
      <p style={{backgroundColor: "yellow"}} className="blueGuy"> Welcome to our first React App </p>

      <img src={require("./logo.svg").default} alt="logo" />
      {/* commmonJS way of importing, this type is older, so to access value of imported module, need .default */}
      <img src={require("./bubble-tea.jpg")} alt="bubble tea"/>
      {/* see using the image we uploaded, we do not need default because it doesn't come with imported module of react */}

    </React.Fragment>
  )
}

export default App;

// React fragment will allow multiple top-level JSX element to be returned - e.g. like div etc.
// e.g. cannot return multiple div unless u wrap w React.Fragment jSX
// notice the need for {} this is because we are using javascript on top of the usually CSS




