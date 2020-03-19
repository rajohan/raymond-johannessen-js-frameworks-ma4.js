import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SearchRecipe from "./SearchRecipe";
import RecipeItem from "./RecipeItem";

type Props = {
    apiUrl: string;
};

type Recipe = {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
};

const StyledRecipeList = styled.div`
    display: grid;
    width: 100%;
    max-width: 1250px;
    margin-top: 15px;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    justify-content: center;

    .searchEmpty {
        grid-column: 1 / -1;
        justify-self: center;
    }
`;

const RecipeList: React.FC<Props> = ({ apiUrl }) => {
    const [keyword, setKeyword] = useState<string>("");
    const [recipes, setRecipes] = useState<Recipe[] | null>(null);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(recipes => setRecipes(recipes.results));
    }, [apiUrl]);

    const searchFilter = (keyword: string): void => {
        setKeyword(keyword.toLowerCase());
    };

    const renderRecipeItems = (): React.ReactNode[] => {
        if (recipes !== null) {
            let filteredRecipes: Recipe[] = recipes;

            // Recipe search, filter results
            if (keyword.length > 0) {
                filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().startsWith(keyword));
            }

            // No recipes available from search
            if (filteredRecipes.length < 1) {
                return [
                    <div key="recipe-0" className="searchEmpty">
                        Sorry, no recipes that starts with "{keyword}" could be found.
                    </div>
                ];
            }

            return filteredRecipes.map((recipe, index) => {
                return (
                    <RecipeItem
                        name={recipe.title}
                        image={recipe.thumbnail}
                        ingredients={recipe.ingredients}
                        key={`recipe-${index}`}
                    />
                );
            });
        }

        return [];
    };

    if (recipes === null) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <SearchRecipe filter={searchFilter} value={keyword} />
            <StyledRecipeList>{renderRecipeItems()}</StyledRecipeList>
        </React.Fragment>
    );
};

export default RecipeList;
