import React from "react";
import styled from "styled-components";

type Props = {
    filter: (keyword: string) => void;
    value: string;
};

const StyledSearchRecipe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        padding: 10px;
        margin-bottom: 10px;
        width: 300px;
        border-radius: 2px;
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        background-color: rgba(249, 249, 249, 1);
        border: none;
    }
`;

const SearchRecipe: React.FC<Props> = ({ filter, value }) => {
    return (
        <StyledSearchRecipe>
            <input
                placeholder="Search for recipe..."
                type="text"
                value={value}
                onChange={e => filter(e.target.value)}
            />
        </StyledSearchRecipe>
    );
};

export default SearchRecipe;
