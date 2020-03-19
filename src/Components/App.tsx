import React from "react";
import { createGlobalStyle } from "styled-components";

import RecipeList from "./RecipeList";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
     body {
        background-color: #262626;
    }
    
    #root {
        color: #fff;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }
`;

const BASE_URL: string = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <h1>Recipe Puppy</h1>
            <GlobalStyle />
            <RecipeList apiUrl={BASE_URL} />
        </React.Fragment>
    );
};

export default App;
