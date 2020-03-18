import React from "react";
import styled from "styled-components";

type Props = {
	ingredients: string;
};

const StyledIngredientList = styled.ul`
	display: grid;
	grid-template-columns: auto auto;
	padding: 0;
	list-style-type: none;
	white-space: nowrap;
	width: 100%;
	height: 100%;
	justify-content: space-evenly;
	align-content: flex-start;

	li {
		text-transform: capitalize;
	}
`;

const IngredientList: React.FC<Props> = ({ ingredients }) => {
	let ingredientsArray: string[] = ingredients.split(",");

	// Remove duplicate ingredients
	ingredientsArray = ingredientsArray.filter((ingredient, index) => ingredientsArray.indexOf(ingredient) === index);

	const renderIngredients = (): React.ReactNode[] => {
		return ingredientsArray.map((ingredient, index) => <li key={`ingredient-${index}`}>{ingredient}</li>);
	};

	return (
		<React.Fragment>
			<h3>Ingredients</h3>
			<StyledIngredientList>{renderIngredients()}</StyledIngredientList>
		</React.Fragment>
	);
};

export default IngredientList;
