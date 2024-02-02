import React, {useState} from "react";
import axios from 'axios';

export default function AddNew(props) {
    
    let url="https://8888-kern000-dwadrecipeapi-0wi8zsbt049.ws-us107.gitpod.io";

    const [newTitle, setNewTitle] = useState('');
    const [newIngredients, setNewIngredients] = useState('');

    async function addNew () {
        let response= await axios.post(url + "/recipes", 
            {
                "title": newTitle,
                "ingredients": newIngredients.split(",")
            }
        )
        props.setActive("listing");
    }

    return (
        <React.Fragment>
        <h1>Add New Recipe</h1>
        <div>
          <div className="label">Title</div>
                <input
                    type="text"
                    className="form-control"
                    name="newTitle"
                    value={newTitle}
                    onChange={(event)=> setNewTitle(event.target.value)}
                />
            </div>
        <div>
            <div className="label">Ingredients</div>
                <input
                    type="text"
                    className="form-control"
                    name="newIngredients"
                    value={newIngredients}
                    onChange={(event)=>setNewIngredients(event.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={addNew}>
            Add New
            </button>
      </React.Fragment> 
  );
}