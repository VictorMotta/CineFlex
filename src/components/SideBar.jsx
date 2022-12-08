import styled from "styled-components";

export default function SideBar({ image, nome, children }) {
    return (
        <StyledContainerSideBar>
            <div>
                <img src={image} alt={nome} />
            </div>
            <div>{children}</div>
        </StyledContainerSideBar>
    );
}

const StyledContainerSideBar = styled.div`
    width: 100%;
    padding: 15px 15px;
    background-color: #dfe6ed;
    border: 1px solid #9eadba;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;

    div:nth-child(1) {
        width: 64px;
        height: 89px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 22px;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #293845;
        word-wrap: break-word;
    }
    span {
        margin-bottom: 5px;
    }
    img {
        width: 48px;
    }
`;
