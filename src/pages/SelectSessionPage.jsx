import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Session from "../components/Session";
import SideBar from "../components/SideBar";
import Loading from "../assets/loading-shrek.gif";

export default function SelectSessionPage() {
    const [selectFilme, setSelectFilm] = useState(undefined);
    const { idFilme } = useParams();

    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );
        promisse.then((res) => setSelectFilm(res.data));
        promisse.catch((res) => console.log(res.response.data));
    }, []);
    console.log(selectFilme);

    if (selectFilme === undefined) {
        return (
            <StyledLoading>
                <img src={Loading} alt='Oque houve?' />
            </StyledLoading>
        );
    }

    return (
        <StyledContainerSessions>
            <h1>Selecione o horário</h1>
            {selectFilme.days.map((item) => (
                <Session item={item} />
            ))}
            <SideBar image={selectFilme.posterURL}>
                <h1>{selectFilme.title}</h1>
            </SideBar>
        </StyledContainerSessions>
    );
}

const StyledContainerSessions = styled.div`
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
