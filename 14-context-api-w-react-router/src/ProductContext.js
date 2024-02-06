import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

export default function ProductContextData (props) {

    const [products, setProducts] = useState([
            { id: 1, product_name: 'ACME Anvils', cost: 9.99 },
            { id: 2, product_name: 'ACME Hammer', cost: 15.5 },
            { id: 3, product_name: 'ACME Screwdriver', cost: 12.5 },
        ]);
    
    const addProduct = (newProductName, cost) => {
        
        let id=Math.floor(Math.random() * 10000 + 9999)
        
        const productsWithNewAdded = [...products, {
                    id: id,
                    product_name: newProductName,
                    cost: cost
                }
            ]

        setProducts(productsWithNewAdded);
    }

    let context = {
        products: products,
        addProduct: addProduct
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )

}
