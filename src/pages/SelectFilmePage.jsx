import { useEffect, useState } from "react";
import styled from "styled-components";
import CardFilme from "../components/CardFilme";
import Loading from "../assets/loading.gif";

import axios from "axios";
import { Link } from "react-router-dom";

export default function SelectFilmePage() {
    const [filmes, setFilmes] = useState(undefined);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promisse.then((res) => setFilmes(res.data));
        promisse.catch((res) => console.log(res.response.data));
    }, []);

    if (filmes === undefined) {
        return (
            <StyledLoading>
                <img src={Loading} alt='Oque houve?' />
            </StyledLoading>
        );
    }

    return (
        <StyledContainerMain>
            <h1>Selecione o filme</h1>
            <div>
                {filmes.map((item) => (
                    <Link to={`/sessoes/${item.id}`}>
                        <CardFilme key={item.id} item={item} />
                    </Link>
                ))}
            </div>
        </StyledContainerMain>
    );
}

const StyledContainerMain = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: 30px 0;
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
