import React from 'react';
import ProductContextData from './ProductContext.js';
import ProductListing from './ProductListing.js';

export default function App(){

  return (
    <ProductContextData>
      <React.Fragment>
        <ProductListing />
      </React.Fragment>
    </ProductContextData>
  )

}