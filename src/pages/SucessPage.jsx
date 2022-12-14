import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SucessPage({ infoSucess, setRotaHome }) {
    useEffect(() => {
        setRotaHome(true);
    }, []);

    return (
        <StyledContainerSucessPage>
            <h1>Pedido feito com sucesso!</h1>
            <StyledInfoSucess data-test='movie-info'>
                <h2>Filme e sessão</h2>
                <span>{infoSucess.movie}</span>
                <span>
                    {infoSucess.date} {infoSucess.horary}
                </span>
            </StyledInfoSucess>
            <StyledInfoSucess data-test='seats-info'>
                <h2>Ingressos</h2>
                {infoSucess.seats.map((item) => (
                    <span key={item.id}>Assento {item.name}</span>
                ))}
            </StyledInfoSucess>
            <StyledInfoSucess data-test='client-info'>
                {infoSucess.buyers.map((buyer) => (
                    <div key={buyer.name}>
                        <h2>Comprador Assento {buyer.seatName}</h2>
                        <span>Nome: {buyer.name}</span>
                        <span>
                            CPF: {buyer.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                        </span>
                    </div>
                ))}
            </StyledInfoSucess>
            <Link data-test='go-home-btn' to='/'>
                <button>Voltar pra Home</button>
            </Link>
        </StyledContainerSucessPage>
    );
}

const StyledContainerSucessPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
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
    a {
        width: 60%;
        height: 42px;
        text-decoration: none;
    }

    button {
        width: 100%;
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
    a button:hover {
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
