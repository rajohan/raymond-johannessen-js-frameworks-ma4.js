import React from "react";
import styled from "styled-components";

import IngredientList from "./IngredientList";

type Props = {
	name: string;
	image: string;
	ingredients: string;
};

const RecipeItemStyled = styled.div`
	border: 1px solid #ffffff;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(249, 249, 249, 1);
	color: black;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);

	h2 {
		font-size: 18px;
	}

	h3 {
		font-size: 15px;
		margin-bottom: 0;
		text-decoration: underline;
	}

	img {
		min-width: 80px;
		min-height: 80px;
		border-radius: 3px;
		border: 1px solid #000;
	}
`;

const RecipeItem: React.FC<Props> = ({ name, image, ingredients }) => {
	return (
		<RecipeItemStyled>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<IngredientList ingredients={ingredients} />
		</RecipeItemStyled>
	);
};

export default RecipeItem;
