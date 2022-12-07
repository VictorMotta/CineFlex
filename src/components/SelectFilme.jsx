import styled from "styled-components";
import CardFilme from "./CardFilme";
import FILMES from "./mock.jsx";

export default function SelectFilme() {
    console.log(FILMES);
    return (
        <>
            <StyledContainerTop>CINEFLEX</StyledContainerTop>
            <StyledContainerMain>
                <h1>Selecione o filme</h1>
                <div>
                    {FILMES.map((item) => (
                        <CardFilme item={item} />
                    ))}
                </div>
            </StyledContainerMain>
        </>
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
`;

const StyledContainerMain = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: 40px 0;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.04em;
        font-family: "Roboto", sans-serif;
        color: #293845;
    }
    div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;
