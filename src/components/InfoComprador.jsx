import { Link } from "react-router-dom";
import styled from "styled-components";

export default function InfoComprador({ enviaFormulario, seatsSelected, form, setForm }) {
    function handleForm(e) {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <>
            <StyledFormPage onSubmit={enviaFormulario}>
                {seatsSelected.map((seat) => (
                    <div key={seat.id}>
                        <label htmlFor='nome'>Nome do Comprador {seat.name}:</label>
                        <input
                            data-test='client-name'
                            id='nome'
                            name={`name${seat.name}`}
                            type='text'
                            placeholder='Digite seu Nome...'
                            onChange={handleForm}
                            value={form[`name${seat.name}`]}
                            required
                        />
                        <label htmlFor='cpf'>CPF do Comprador {seat.name}:</label>
                        <input
                            data-test='client-cpf'
                            id='cpf'
                            type='text'
                            name={`cpf${seat.name}`}
                            pattern='(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})'
                            placeholder='Digite seu CPF...'
                            onChange={handleForm}
                            value={form[`cpf${seat.name}`]}
                            minLength='11'
                            maxLength='11'
                            required
                        />
                    </div>
                ))}

                <button data-test='book-seat-btn'>Reserver assento(s)</button>
            </StyledFormPage>
        </>
    );
}

const StyledFormPage = styled.form`
    width: 90%;
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
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
        cursor: pointer;
    }
    button:hover {
        background-color: #fff;
        color: #e8833a;
        border: 1px solid #e8833a;
    }
`;
