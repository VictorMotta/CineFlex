import styled from "styled-components";

import {
    CORASSENTOSELECIONADO,
    BORDAASSENTOSELECIONADO,
    CORASSENTODISPONIVEL,
    BORDAASSENTODISPONIVEL,
    CORASSENTOINDISPONIVEL,
    BORDASSENTOINDISPONIVEL,
} from "../constants/colors";

export default function Assento({
    item,
    chooseSeat,
    seatsSelected,
    setSeatsSelected,
    form,
    setForm,
}) {
    const { id, name, isAvailable } = item;

    function chooseSeat(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível!");
            return;
        }

        seat.selected = !seat.selected;

        if (!seat.selected) {
            const unselect = window.confirm("Tem certeza que quer retirar esse assento?");

            if (unselect) {
                const filterSeats = seatsSelected.filter((item) => !(item.id === seat.id));
                setSeatsSelected(filterSeats);

                const newForm = { ...form };

                delete newForm[`name${seat.name}`];
                delete newForm[`cpf${seat.name}`];
                setForm(newForm);

                return;
            }
        }

        setSeatsSelected([...seatsSelected, seat]);
        return;
    }

    return (
        <>
            {item.isAvailable === false ? (
                <StyledAssento
                    data-test='seat'
                    cor={CORASSENTOINDISPONIVEL}
                    corBorda={BORDASSENTOINDISPONIVEL}
                    onClick={() => chooseSeat(item)}
                >
                    {name}
                </StyledAssento>
            ) : !item.selected ? (
                <StyledAssento
                    data-test='seat'
                    cor={CORASSENTODISPONIVEL}
                    corBorda={BORDAASSENTODISPONIVEL}
                    onClick={() => chooseSeat(item)}
                >
                    {name}
                </StyledAssento>
            ) : (
                <StyledAssento
                    data-test='seat'
                    cor={CORASSENTOSELECIONADO}
                    corBorda={BORDAASSENTOSELECIONADO}
                    onClick={() => chooseSeat(item)}
                >
                    {name}
                </StyledAssento>
            )}
        </>
    );
}

const StyledAssento = styled.li`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.cor};
    margin-bottom: 18px;
    margin-right: 3px;
    margin-left: 3px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.corBorda};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
`;
