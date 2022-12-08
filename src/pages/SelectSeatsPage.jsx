import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Loading from "../assets/loading-nazare.gif";
import axios from "axios";
import { useParams } from "react-router-dom";
import Assento from "../components/Assento";

const CORASSENTOSELECIONADO = "#1AAE9E";
const CORASSENTODISPONIVEL = "#C3CFD9";
const CORASSENTOINDISPONIVEL = "#FBE192";
const BORDAASSENTOSELECIONADO = "#0E7D71";
const BORDAASSENTODISPONIVEL = "#7B8B99";
const BORDASSENTOINDISPONIVEL = "#F7C52B";

export default function SelectSeatsPage() {
    const [seats, setSeats] = useState(undefined);
    const { idSessao } = useParams();
    const [seatsSelected, setSeatsSelected] = useState([]);
    console.log(seatsSelected);
    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );
        promisse.then((res) => setSeats(res.data));
        promisse.catch((res) => console.log(res.response.data));
    }, []);

    if (seats === undefined) {
        return (
            <StyledLoading>
                <img src={Loading} alt='Oque houve?' />
            </StyledLoading>
        );
    }
    console.log(seatsSelected);
    return (
        <StyledContainerSeatsPage>
            <h1>Seleciona o(s) assento(s)</h1>
            <StyledSeats>
                <ul>
                    {seats.seats.map((item) => (
                        <Assento
                            key={item.id}
                            item={item}
                            seatsSelected={seatsSelected}
                            setSeatsSelected={setSeatsSelected}
                        />
                    ))}
                </ul>
            </StyledSeats>
            <StyledShowCase
                borderSelecionado={BORDAASSENTOSELECIONADO}
                corSelecionado={CORASSENTOSELECIONADO}
                borderDisponivel={BORDAASSENTODISPONIVEL}
                corDisponivel={CORASSENTODISPONIVEL}
                borderIndisponivel={BORDASSENTOINDISPONIVEL}
                corIndisponivel={CORASSENTOINDISPONIVEL}
            >
                <div>
                    <span> </span>
                    <h4>Selecionado</h4>
                </div>
                <div>
                    <span> </span>
                    <h4>Disponível</h4>
                </div>
                <div>
                    <span> </span>
                    <h4>Indisponível</h4>
                </div>
            </StyledShowCase>
            <StyledFormPage>
                <label>Nome do Comprador:</label>
                <input type='text' placeholder='Digite seu Nome...' />
                <label>CPF do Comprador:</label>
                <input type='text' placeholder='Digite seu CPF...' />
                <button>Reserver assento(s)</button>
            </StyledFormPage>
            <SideBar image={seats.movie.posterURL}>
                <span>{seats.movie.title}</span>
                <span>
                    {seats.day.weekday} - {seats.name}
                </span>
            </SideBar>
        </StyledContainerSeatsPage>
    );
}

const StyledContainerSeatsPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
    h1 {
        margin: 30px 0;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.04em;
        font-family: "Roboto", sans-serif;
        color: #293845;
    }
`;

const StyledSeats = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
        width: 90%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const StyledShowCase = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: -0.013em;
        color: #4e5a65;
        margin-top: 8px;
    }
    div span:nth-child(1) {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: 1px solid ${(props) => props.borderSelecionado};
        background-color: ${(props) => props.corSelecionado};
    }
    div:nth-child(2) span {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: 1px solid ${(props) => props.borderDisponivel};
        background-color: ${(props) => props.corDisponivel};
    }
    div:nth-child(3) span {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: 1px solid ${(props) => props.borderIndisponivel};
        background-color: ${(props) => props.corIndisponivel};
    }
`;

const StyledFormPage = styled.form`
    width: 90%;
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    label {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-bottom: 5px;
    }
    input {
        height: 51px;
        background-color: #fff;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        margin-bottom: 20px;
    }
    input::placeholder {
        font-family: "Roboto", sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #afafaf;
        padding-left: 18px;
    }
    button {
        width: 70%;
        height: 42px;
        background-color: #e8833a;
        border-radius: 3px;
        border: none;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #fff;
        margin: 0 auto;
        margin-top: 57px;
        margin-bottom: 100px;
        transition: 0.5s;
    }
    button:hover {
        background-color: #fff;
        color: #e8833a;
        border: 1px solid #e8833a;
    }
`;

const StyledLoading = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 50%;
    }
`;
