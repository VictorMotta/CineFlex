import { Link } from "react-router-dom";
import styled from "styled-components";

export default function InfoComprador({
    nomeBuyer,
    setNomeBuyer,
    cpfBuyer,
    setCpfBuyer,
    enviaFormulario,
    seatsSelected,
}) {
    return (
        <>
            <StyledFormPage>
                <label>Nome do Comprador:</label>
                <input
                    type='text'
                    placeholder='Digite seu Nome...'
                    onChange={(e) => setNomeBuyer(e.target.value)}
                    value={nomeBuyer}
                    required
                />
                <label>CPF do Comprador:</label>
                <input
                    type='number'
                    placeholder='Digite seu CPF...'
                    onChange={(e) => setCpfBuyer(e.target.value)}
                    value={cpfBuyer}
                    minLength='11'
                    maxLength='11'
                    required
                />
                <Link
                    to={
                        nomeBuyer && cpfBuyer && cpfBuyer.length === 11 && seatsSelected.length > 0
                            ? "/sucesso"
                            : null
                    }
                >
                    <button onClick={enviaFormulario}>Reserver assento(s)</button>
                </Link>
            </StyledFormPage>
        </>
    );
}

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
    a {
        width: 70%;
        height: 42px;
        margin: 0 auto;
    }
    button {
        width: 100%;
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
