import React, {useState} from "react";
import Listing from "./Listing";
import AddNew from "./AddNew";

export default function RecipeBook(){

    const [active, setActive] = useState('listing');

    function renderContent() {
    
        if (active === "listing") {
            return (
                <React.Fragment>
                    <Listing />
                </React.Fragment>
            );
        } else if (active === "add") {
            return (
                <React.Fragment>
                    <AddNew setActive={setActive}/>
                </React.Fragment>
            );
        }
    }

  return (
      <React.Fragment>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  setActive("listing");
                }}
              >
                Recipes
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  setActive("add");
                }}
              >
                Add New
              </button>
            </li>
          </ul>
          {renderContent()}
        </div>
      </React.Fragment>
    );
}
