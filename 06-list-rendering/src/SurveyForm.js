import React, {useState} from 'react';

export default function SurveyForm (){

    const [name, setName] = useState('');
    
    const [country, setCountry] = useState('');


    const [fruits, setFruits] = useState('');

    const [colour, setColour] = useState('');
    
    // Note these are non-state variables
    let countryOptions = [
        {
            'display':'Singapore',
            'value':'singapore'
        },
        {
            'display':'Malaysia',
            'value':'malaysia'
        },
        {
            'display':'Indonesia',
            'value':'indonesia'
        }
    ]

    let fruitOptions=[
        {
            'display':'Apple',
            'value':'apple'
        },
        {
            'display':'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]


    let colourOptions = [
            {
                'display':'Red',
                'value': 'red'
            },
            {
                'display': 'Green',
                'value': 'green'
            },
            {
                'display': 'Blue',
                'value': 'blue'
            }
    ]

    // / method 1:
    function renderColours(){
        let formOptions = [];
        for (let targetColour of colourOptions){
            let formFragment = (
                <React.Fragment key={targetColour.value}> 
                    <input  name="colour" 
                            type="radio" 
                            value={targetColour.value}
                            checked={colour === targetColour.value}
                            onChange={(event)=>setColour(event.target.value)}
                    />
                    <span> {targetColour.display}</span>
                </React.Fragment>
            )
            formOptions.push(formFragment)
        }
        return formOptions;
    }

    // method 2:
    const listItems = colourOptions.map(targetColour =>
        <React.Fragment key={targetColour.value}> 
            <input  name="colour" 
                    type="radio" 
                    value={targetColour.value}
                    checked={colour === targetColour.value}
                    onChange={(event)=>setColour(event.target.value)}
            />
            <span> {targetColour.display}</span>
        </React.Fragment>
    )
    
 
    



    const handleCheckBoxChange = (event) => {
        const { value, checked } = event.target;
        if (checked){
            if(fruits.length > 0){
                setFruits([...fruits, value]);
            } else {
                setFruits([value]);
            }
        } else {
            let fruitsArray = fruits.filter((fruit) => fruit !== value);
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
                
                {/* Method 1 of list rendering */}
                {/* {renderColours()} */}
                
                {/* Method 2 of list rendering */}
                {listItems}
                
                {/* original method of hard-coding */}
                {/* <input  type="radio" 
                        value="red" 
                        checked={colours === "red"} 
                        name="colour" // so that only one can be checked if all same name
                        onChange={(event)=> setColours(event.target.value)}
                /> Red
                <input  type="radio" 
                        value="blue" 
                        checked={colours === "blue"} 
                        name="colour"
                        onChange={(event)=> setColours(event.target.value)}
                /> Blue
                <input  type="radio" 
                        value="green" 
                        checked={colours === "green"} 
                        name="colour"
                        onChange={(event)=> setColours(event.target.value)}
                /> Green */}
            </div>
            <div>
                <p> This is the state of colour: {colour}</p>
            </div>

            <div>
                <label> Country: </label>

                {/* method 3 to use .map */}
                <select value={country}
                        name="country"
                        onChange={(event)=> setCountry(event.target.value)}
                >
                    {countryOptions.map((c)=>   <option key={c.value} value={c.value}>
                                                    {c.display}
                                                </option>
                    )}
                </select>

                {/* Previous hard-coding method */}
                {/* <select value={country}
                        name="country"
                        onChange={(event)=> setCountry(event.target.value)}>
                    <option value="" disabled> Select one </option>
                    <option value="singapore"> Singapore </option>
                    <option value="malaysia"> Malaysia </option>
                    <option value="indonesia"> Indonesia </option>
                </select> */}
            </div>
            <div>
                <p> This is the state of country: {country}</p>
            </div>

            <div>
            <label>Fruits: </label>

                {fruitOptions.map((f) => 
                    <React.Fragment>
                        <input  type="checkbox" 
                                name="fruits" 
                                value={f.value}
                                checked={fruits.includes(f.value)} 
                                onChange={handleCheckBoxChange}
                        /> <span> {f.display} </span>
                    </React.Fragment>
                    )
                }

            </div>

            {/* <div>
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
            </div> */}
            <p> State of fruits is this: {fruits}</p>
            <button> Submit </button>
        </React.Fragment>
    )
}