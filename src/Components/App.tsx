import React from "react";
import { createGlobalStyle } from "styled-components";

import Recipes from "./Recipes";

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

const App: React.FC = () => {
    return (
        <React.Fragment>
            <h1>Recipe Puppy</h1>
            <GlobalStyle />
            <Recipes />
        </React.Fragment>
    );
};

export default App;
