import styled from "styled-components";

export default function Session({ item }) {
    const { weekday, date, showtimes } = item;
    return (
        <StyledSession>
            <h1>
                {weekday} - {date}
            </h1>
            <div>
                {showtimes.map((item) => (
                    <button key={item.id}>{item.name}</button>
                ))}
            </div>
        </StyledSession>
    );
}

const StyledSession = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.02em;
        color: #293845;
    }
    button {
        width: 83px;
        height: 43px;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            background-color: #fff;
            color: #e8833a;
            border: 1px solid #e8833a;
        }
    }
`;
