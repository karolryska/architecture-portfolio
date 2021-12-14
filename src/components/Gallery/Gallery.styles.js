import styled from 'styled-components';

const gridGap = 10;

export const calcImageHeight = (containerWidth) => {
    const imageWidth = (containerWidth - 2 * gridGap) / 3;
    console.log((imageWidth / 3) * 2);
    return (imageWidth / 3) * 2;
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainImage = styled.div`
    display: none;

    @media (min-width: 769px) {
        display: block;
        position: relative;
        height: ${(props) => (props.wrapperWidth / 3) * 2}px;
        width: 100%;
        margin-bottom: ${gridGap}px;
        background-color: lightgray;
    }
`;

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: ${gridGap}px;
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 100%;
    margin-bottom: 16px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }

    @media (min-width: 769px) {
        height: ${(props) => calcImageHeight(props.wrapperWidth)}px;
        width: 100%;
        margin-bottom: 0;
    }
`;

export const Button = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
