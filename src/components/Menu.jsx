import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Menu({ rotaHome }) {
    const navigate = useNavigate();
    return (
        <StyledContainerTop>
            {!rotaHome && (
                <button onClick={() => navigate(-1)}>
                    <ion-icon name='arrow-back-outline'></ion-icon>
                </button>
            )}
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
    position: relative;
    a {
        text-decoration: none;
        color: #e8833a;
    }
    button {
        width: 50px;
        height: 30px;
        position: absolute;
        left: 0;
        margin-left: 10px;
        border: none;
        background-color: #c3cfd9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    ion-icon {
        font-size: 30px;
        color: #e8833a;
    }
`;
