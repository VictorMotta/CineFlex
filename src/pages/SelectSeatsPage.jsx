import styled from "styled-components";
import SideBar from "../components/SideBar";

const CORASSENTOSELECIONADO = "#1AAE9E";
const CORASSENTODISPONIVEL = "#C3CFD9";
const CORASSENTOINDISPONIVEL = "#FBE192";
const BORDAASSENTOSELECIONADO = "#0E7D71";
const BORDAASSENTODISPONIVEL = "#7B8B99";
const BORDASSENTOINDISPONIVEL = "#F7C52B";

export default function SelectSeatsPage() {
    const SESSION = {
        id: 1,
        name: "15:00",
        day: {
            id: 24062021,
            weekday: "Quinta-feira",
            date: "24/06/2021",
        },
        movie: {
            id: 1,
            title: "2067",
            posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            overview:
                "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            releaseDate: "2020-10-01T00:00:00.000Z",
        },
        seats: [
            {
                id: 1,
                name: "1",
                isAvailable: false,
            },
            {
                id: 2,
                name: "2",
                isAvailable: true,
            },
            {
                id: 3,
                name: "3",
                isAvailable: true,
            },
            {
                id: 4,
                name: "4",
                isAvailable: true,
            },
            {
                id: 5,
                name: "5",
                isAvailable: true,
            },
            {
                id: 6,
                name: "6",
                isAvailable: true,
            },
            {
                id: 7,
                name: "7",
                isAvailable: true,
            },
            {
                id: 8,
                name: "8",
                isAvailable: true,
            },
            {
                id: 9,
                name: "9",
                isAvailable: true,
            },
            {
                id: 10,
                name: "10",
                isAvailable: true,
            },
            {
                id: 11,
                name: "11",
                isAvailable: true,
            },
            {
                id: 12,
                name: "12",
                isAvailable: true,
            },
            {
                id: 13,
                name: "13",
                isAvailable: true,
            },
            {
                id: 14,
                name: "14",
                isAvailable: true,
            },
            {
                id: 15,
                name: "15",
                isAvailable: true,
            },
            {
                id: 16,
                name: "16",
                isAvailable: true,
            },
            {
                id: 17,
                name: "17",
                isAvailable: true,
            },
            {
                id: 18,
                name: "18",
                isAvailable: true,
            },
            {
                id: 19,
                name: "19",
                isAvailable: true,
            },
            {
                id: 20,
                name: "20",
                isAvailable: true,
            },
            {
                id: 21,
                name: "21",
                isAvailable: true,
            },
            {
                id: 22,
                name: "22",
                isAvailable: true,
            },
            {
                id: 23,
                name: "23",
                isAvailable: true,
            },
            {
                id: 24,
                name: "24",
                isAvailable: true,
            },
            {
                id: 25,
                name: "25",
                isAvailable: true,
            },
            {
                id: 26,
                name: "26",
                isAvailable: true,
            },
            {
                id: 27,
                name: "27",
                isAvailable: true,
            },
            {
                id: 28,
                name: "28",
                isAvailable: true,
            },
            {
                id: 29,
                name: "29",
                isAvailable: true,
            },
            {
                id: 30,
                name: "30",
                isAvailable: true,
            },
            {
                id: 31,
                name: "31",
                isAvailable: true,
            },
            {
                id: 32,
                name: "32",
                isAvailable: true,
            },
            {
                id: 33,
                name: "33",
                isAvailable: true,
            },
            {
                id: 34,
                name: "34",
                isAvailable: true,
            },
            {
                id: 35,
                name: "35",
                isAvailable: true,
            },
            {
                id: 36,
                name: "36",
                isAvailable: true,
            },
            {
                id: 37,
                name: "37",
                isAvailable: true,
            },
            {
                id: 38,
                name: "38",
                isAvailable: true,
            },
            {
                id: 39,
                name: "39",
                isAvailable: true,
            },
            {
                id: 40,
                name: "40",
                isAvailable: true,
            },
            {
                id: 41,
                name: "41",
                isAvailable: true,
            },
            {
                id: 42,
                name: "42",
                isAvailable: true,
            },
            {
                id: 43,
                name: "43",
                isAvailable: true,
            },
            {
                id: 44,
                name: "44",
                isAvailable: true,
            },
            {
                id: 45,
                name: "45",
                isAvailable: true,
            },
            {
                id: 46,
                name: "46",
                isAvailable: true,
            },
            {
                id: 47,
                name: "47",
                isAvailable: true,
            },
            {
                id: 48,
                name: "48",
                isAvailable: true,
            },
            {
                id: 49,
                name: "49",
                isAvailable: true,
            },
            {
                id: 50,
                name: "50",
                isAvailable: true,
            },
        ],
    };

    return (
        <StyledContainerSeatsPage>
            <h1>Seleciona o(s) assento(s)</h1>
            <StyledSeats>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
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
            <SideBar image={SESSION.movie.posterURL}>
                <span>{SESSION.movie.title}</span>
                <span>
                    {SESSION.day.weekday} - {SESSION.name}
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
    li {
        width: 26px;
        height: 26px;
        background-color: #c3cfd9;
        margin-bottom: 18px;
        margin-right: 3px;
        margin-left: 3px;
        border-radius: 100%;
        border: 1px solid #808f9d;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
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
