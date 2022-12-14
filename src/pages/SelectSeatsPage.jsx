import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Loading from "../assets/loading-girando.gif";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Assento from "../components/Assento";
import {
    CORASSENTOSELECIONADO,
    BORDAASSENTOSELECIONADO,
    CORASSENTODISPONIVEL,
    BORDAASSENTODISPONIVEL,
    CORASSENTOINDISPONIVEL,
    BORDASSENTOINDISPONIVEL,
} from "../constants/colors";
import InfoComprador from "../components/InfoComprador";

export default function SelectSeatsPage({ setInfoSucess, setRotaHome }) {
    const [seats, setSeats] = useState(undefined);
    const { idSessao } = useParams();
    const [seatsSelected, setSeatsSelected] = useState([]);
    const [form, setForm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setRotaHome(false);
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );
        promisse.then((res) => setSeats(res.data));
        promisse.catch((res) => console.log(res.response.data));
    }, []);

    function enviaFormulario(e) {
        e.preventDefault();
        const lista = seatsSelected.map((s) => s.id);

        const body = {
            ids: lista,
            compradores: seatsSelected.map((seat) => {
                return {
                    idAssento: seat.id,
                    nome: form[`name${seat.name}`],
                    cpf: form[`cpf${seat.name}`],
                };
            }),
        };

        console.log(body);

        if (seatsSelected.length === 0) {
            alert("Selecione pelo menos 1 assento!");
            return;
        } else {
            const promisse = axios.post(
                "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
                body
            );
            promisse.then((res) => {
                console.log(res.data);
                setInfoSucess({
                    seats: seatsSelected,
                    movie: seats.movie.title,
                    horary: seats.name,
                    date: seats.day.date,
                    buyers: seatsSelected.map((seat) => {
                        return {
                            seatName: seat.name,
                            name: form[`name${seat.name}`],
                            cpf: form[`cpf${seat.name}`],
                        };
                    }),
                });
                navigate("/sucesso");
            });
            promisse.catch((res) => console.log(res.response.data));
        }
    }

    if (seats === undefined) {
        return (
            <StyledLoading>
                <img src={Loading} alt='Oque houve?' />
            </StyledLoading>
        );
    }

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
                            form={form}
                            setForm={setForm}
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
                    <h4>Dispon??vel</h4>
                </div>
                <div>
                    <span> </span>
                    <h4>Indispon??vel</h4>
                </div>
            </StyledShowCase>

            <InfoComprador
                enviaFormulario={enviaFormulario}
                seatsSelected={seatsSelected}
                form={form}
                setForm={setForm}
            />

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
