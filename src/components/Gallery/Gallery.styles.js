import styled from 'styled-components';

const gridGap = 10;

export const calcImageHeight = (containerWidth) => {
    const imageWidth = (containerWidth - 2 * gridGap) / 3;
    return (imageWidth / 3) * 2;
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`;

export const MainImage = styled.div`
    position: relative;
    height: 400px;
    width: 100%;
    margin-bottom: ${gridGap}px;
    background-color: lightgray;
`;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${gridGap}px;
    width: 100%;
`;

export const Image = styled.div`
    height: ${calcImageHeight(600)}px;
    background-color: lightgray;
`;

export const Button = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
