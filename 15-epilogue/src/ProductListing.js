import React, {useContext} from 'react';
import {ProductContext} from './ProductContext';

export default function ProductListing(){

    const context = useContext(ProductContext);

    return(
        <React.Fragment>
            <ul>
                {context.products? (context.products.map(p => (
                    <li>{p.product_name}</li>))) : (<p> Loading </p>)
                }                
            </ul>
        </React.Fragment>
    )
}