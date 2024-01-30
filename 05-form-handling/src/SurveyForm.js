import React, {useState} from 'react';

export default function SurveyForm (){
    
    const [name, setName] = useState('');
    const [colour, setColour] = useState('');
    const [country, setCountry] = useState('');
    const [fruits, setFruits] = useState([]);

    const handleCheckBoxChange = (event) => {
        const { value, checked } = event.target;
        // we destructure value and checked from event.target
        if (checked){
            if(fruits.length > 0){
                setFruits([...fruits, value]);
                // use spread operator to get each of the elements, and we add the new value that is checked
            } else {
                setFruits([value]);
                // since the fruits length = 0 means it is empty
            }
        } else {
            let fruitsArray = fruits.filter((fruit) => fruit !== value);
            // we exclude those not checked
            setFruits(fruitsArray);
        }
    }

    return (
        <React.Fragment>
            <div>
                <label> Name: </label>
                <input  type="text" 
                        value={name}
                        name="name"
                        onChange={(event)=> setName(event.target.value)} />
            </div>
            <div>
                <p> This is the state of name: {name}</p>
            </div>

            <div>
                <label> Favorite Colour </label>
                <input  type="radio" 
                        value="red" 
                        checked={colour === "red"} 
                        name="colour" // so that only one can be checked if all same name
                        onChange={(event)=> setColour(event.target.value)}
                /> Red
                <input  type="radio" 
                        value="blue" 
                        checked={colour === "blue"} 
                        name="colour"
                        onChange={(event)=> setColour(event.target.value)}
                /> Blue
                <input  type="radio" 
                        value="green" 
                        checked={colour === "green"} 
                        name="colour"
                        onChange={(event)=> setColour(event.target.value)}
                /> Green
            </div>
            <div>
                <p> This is the state of colour: {colour}</p>
            </div>
            <div>
                <label> Country: </label>
                <select value={country}
                        name="country"
                        onChange={(event)=> setCountry(event.target.value)}>
                    <option value="" disabled> Select one </option>
                    <option value="singapore"> Singapore </option>
                    <option value="malaysia"> Malaysia </option>
                    <option value="indonesia"> Indonesia </option>
                </select>
            </div>
            <div>
                <p> This is the state of country: {country}</p>
            </div>

            <div>
                <label>Fruits: </label>
                <input  type="checkbox" 
                        name="fruits" 
                        value="apple"
                        checked={fruits.includes('apple')} 
                        onChange={handleCheckBoxChange}
                        /> Apple
                <input  type="checkbox" 
                        name="fruits" 
                        value="orange"
                        checked={fruits.includes('orange')} 
                        onChange={handleCheckBoxChange}
                        /> Orange
                <input  type="checkbox" 
                        name="fruits" 
                        value="pineapple" 
                        checked={fruits.includes('pineapple')}
                        onChange={handleCheckBoxChange}
                        /> Pineapple
                <input  type="checkbox" 
                        name="fruits" 
                        value="durian"
                        checked={fruits.includes('durian')} 
                        onChange={handleCheckBoxChange}
                        /> Durian
            </div>
            <p> State of fruits is this: {fruits}</p>
            <button> Submit </button>
        </React.Fragment>
    )
}