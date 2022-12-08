import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    return (
        <StyledContainerTop>
            <Link to='/'>CINEFLEX</Link>
        </StyledContainerTop>
    );
}

const StyledContainerTop = styled.div`
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e8833a;
    font-weight: 400;
    font-size: 34px;
    font-family: "Roboto", sans-serif;
    a {
        text-decoration: none;
        color: #e8833a;
    }
`;
