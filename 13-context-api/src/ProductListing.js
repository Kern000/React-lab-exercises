import React, {useContext} from 'react';
import ProductContext from './ProductContext';
import AddProduct from './AddProduct';

export default function ProductListing(){

    let context = useContext(ProductContext);

    return(

        <React.Fragment>
            <ul>
                {/* {context.getProducts().map(p => (
                    <li>{p.product_name}</li>
                ))} */}
                <AddProduct />
            </ul>
        </React.Fragment>

    )
}