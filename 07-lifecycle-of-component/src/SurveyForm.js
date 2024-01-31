import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function SurveyForm (){

    const [name, setName] = useState('');
    
    const [country, setCountry] = useState('');
    const [fruits, setFruits] = useState('');
    const [colour, setColour] = useState('');

    const [countryOptions, setCountryOptions] = useState('');
    const [fruitOptions, setFruitOptions] = useState('');
    const [colourOptions, setColourOptions] = useState('');    


    // useEffect(()=>{
    //     axios.get('./public/json/colours.json')
    //         .then(result => console.log('colours axios', result.data));
    //     axios.get('./public/json/country.json').then(result => setCountryOptions('country axios', result.data));
    //     axios.get('./pubilc/json/fruits.json').then(result => setFruitOptions('fruits axios', result.data));
    // })

    useEffect(()=>{

        // try {
        //     axios.get('json/colours.json').then(result => setColourOptions(result.data));
        // } catch (e) {
        //     console.error(e.message);
        // }

        // try {
        //     axios.get('json/countries.json').then(result => setCountryOptions(result.data));
        // } catch (e) {
        //     console.error(e.message);
        // }

        axios.get('json/colours.json').then(result => setColourOptions(result.data));
        axios.get('json/countries.json').then(result => setCountryOptions(result.data));
        axios.get('json/fruits.json').then(result => setFruitOptions(result.data));
    })

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
                {colourOptions ? colourOptions.map(targetColour =>
                                                                <React.Fragment key={targetColour.value}> 
                                                                    <input  name="colour" 
                                                                            type="radio" 
                                                                            value={targetColour.value}
                                                                            checked={colour === targetColour.value}
                                                                            onChange={(event)=>setColour(event.target.value)}
                                                                    />
                                                                    <span> {targetColour.display}</span>
                                                                </React.Fragment>) : <p> loading </p>}
                
            </div>
            <div>
                <p> This is the state of colour: {colour}</p>
            </div>

            <div>
                <label> Country: </label>
                <select value={country}
                        name="country"
                        onChange={(event)=> setCountry(event.target.value)}
                >
                    {countryOptions ? countryOptions.map((c)=>   <option key={c.value} value={c.value}>
                                                    {c.display}
                                                </option>) : <option> loading </option>
                    }
                </select>
            </div>
            <div>
                <p> This is the state of country: {country}</p>
            </div>

            <div>
            <label>Fruits: </label>

                {fruitOptions? fruitOptions.map((f) => 
                    <React.Fragment>
                        <input  type="checkbox" 
                                name="fruits" 
                                value={f.value}
                                checked={fruits.includes(f.value)} 
                                onChange={handleCheckBoxChange}
                        /> <span> {f.display} </span>
                    </React.Fragment>
                    ) : <p> loading </p>
                }

            </div>
            <p> State of fruits is this: {fruits}</p>
            <button> Submit </button>
        </React.Fragment>
    )
}