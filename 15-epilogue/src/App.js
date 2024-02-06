import React from 'react';
import ProductContextData from './ProductContext.js';
import {  BrowserRouter as Router, 
          Routes, 
          Route, 
          Link} from 'react-router-dom'
import ProductListingPage from './pages/ProductListingPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage.js';

export default function App(){
 
  return (
      <React.Fragment>
        <ProductContextData>
          <Router>
            <Routes>
              <Route  path="/" element={<ProductListingPage />} />
              <Route  path="/productDetails/:productID"
                      element={<ProductDetailsPage />}
              />
            </Routes>
          </Router>
        </ProductContextData>
      </React.Fragment>
  )

}