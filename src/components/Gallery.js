import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`;

const MainImage = styled.div`
    height: 400px;
    width: 100%;
    margin-bottom: 20px;
    background-color: lightgray; 
`;

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
`;

const Image = styled.div`
    height: 100px;
    background-color: lightgray; 
`;

const Gallery = () => {
    return (
        <Wrapper>
            <MainImage />
            <ImagesContainer>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </ImagesContainer>
        </Wrapper>
    )
};

export default Gallery;