import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Listing() {

    let url="https://8888-kern000-dwadrecipeapi-0wi8zsbt049.ws-us107.gitpod.io";

    const [data, setData] = useState('');

    useEffect(()=> { 
        fetchData()
    },[])
    // even with just one line of code/function, must have curly braces because useEffect must return a function

    async function fetchData (){
        let response = await axios.get(url + "/recipes");
        setData(response.data);
    }

    return (
        <React.Fragment>
            <h1>Recipes Listing</h1>
            <div>
                { data? (data.map(r => 
                            <React.Fragment key={r._id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {r.title}
                                        </h3>
                                        <h4>Ingredients</h4>
                                        <ul>
                                            {r.ingredients.map(i => <li key={i}>{i}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )) : (<p> loading </p>)
                }
            </div>
        </React.Fragment>
    )
}
