import styled from "styled-components";

import {
    CORASSENTOSELECIONADO,
    BORDAASSENTOSELECIONADO,
    CORASSENTODISPONIVEL,
    BORDAASSENTODISPONIVEL,
    CORASSENTOINDISPONIVEL,
    BORDASSENTOINDISPONIVEL,
} from "../constants/colors";

export default function Assento({ item, chooseSeat, seatsSelected, setSeatsSelected }) {
    const { id, name, isAvailable } = item;

    // function mostraCorreto() {
    //     if (item.isAvailable === false) {
    //         return (
    //             <StyledAssento
    //                 cor={CORASSENTOINDISPONIVEL}
    //                 corBorda={BORDASSENTOINDISPONIVEL}
    //                 onClick={() => chooseSeat(item)}
    //             >
    //                 {name}
    //             </StyledAssento>
    //         );
    //     }
    //     if (item.isAvailable === true && (item.selected === false || item.selected === undefined)) {
    //         return (
    //             <StyledAssento
    //                 cor={CORASSENTODISPONIVEL}
    //                 corBorda={BORDAASSENTODISPONIVEL}
    //                 onClick={() => chooseSeat(item)}
    //             >
    //                 {name}
    //             </StyledAssento>
    //         );
    //     }
    //     if (item.selected === true) {
    //         return (
    // <StyledAssento
    //     cor={CORASSENTOSELECIONADO}
    //     corBorda={BORDAASSENTOSELECIONADO}
    //     onClick={() => chooseSeat(item)}
    // >
    //     {name}
    // </StyledAssento>
    //         );
    //     }
    // }

    function chooseSeat(seat) {
        if (seat.isAvailable === false) {
            return;
        }

        seat.selected = !seat.selected;

        if (!seat.selected) {
            const filterSeats = seatsSelected.filter((item) => !(item.id === seat.id));
            setSeatsSelected([...filterSeats]);
            return;
        }

        setSeatsSelected([...seatsSelected, seat]);
        return;
    }

    return (
        <>
            {item.isAvailable === false ? (
                <StyledAssento
                    cor={CORASSENTOINDISPONIVEL}
                    corBorda={BORDASSENTOINDISPONIVEL}
                    onClick={() => chooseSeat(item)}
                >
                    {name}
                </StyledAssento>
            ) : !item.selected ? (
                <StyledAssento
                    cor={CORASSENTODISPONIVEL}
                    corBorda={BORDAASSENTODISPONIVEL}
                    onClick={() => chooseSeat(item)}
                >
                    {name}
                </StyledAssento>
            ) : (
                <StyledAssento
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
`;
