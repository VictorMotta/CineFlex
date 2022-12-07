import styled from "styled-components";

export default function CardFilme({ item }) {
    const { posterURL, title } = item;
    return (
        <StyledContainerImage>
            <img src={posterURL} alt={title} />
        </StyledContainerImage>
    );
}

const StyledContainerImage = styled.div`
    width: 145px;
    height: 209px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    img {
        width: 129px;
        height: 193px;
    }
`;
