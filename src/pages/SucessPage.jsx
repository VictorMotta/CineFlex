import styled from "styled-components";

export default function SucessPage() {
    return (
        <StyledContainerSucessPage>
            <h1>Pedido feito com sucesso!</h1>
            <StyledInfoSucess>
                <h2>Filme e sessão</h2>
                <span>EnolaHolmes</span>
                <span>24/06/2021 15:00</span>
            </StyledInfoSucess>
            <StyledInfoSucess>
                <h2>Ingressos</h2>
                <span>Assento 15</span>
                <span>Assento 16</span>
            </StyledInfoSucess>
            <StyledInfoSucess>
                <h2>Comprador</h2>
                <span>Nome: João da Silva Sauro</span>
                <span>CPF: 123.456.789-10</span>
            </StyledInfoSucess>
            <button>Voltar pra Home</button>
        </StyledContainerSucessPage>
    );
}

const StyledContainerSucessPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        width: 50%;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #247a6b;
        margin: 40px 0;
        word-wrap: break-word;
        text-align: center;
    }
    button {
        width: 60%;
        height: 42px;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 18px;
        letter-spacing: 0.04em;
        transition: 0.5s;
        cursor: pointer;
    }
    button:hover {
        background: #fff;
        color: #e8833a;
        border: 1px solid #e8833a;
    }
`;

const StyledInfoSucess = styled.div`
    width: 90%;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    h2 {
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 10px;
    }
    span {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;
