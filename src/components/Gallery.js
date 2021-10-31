import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

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

const Gallery = ({ images }) => (
    <Wrapper>
        <MainImage />
        <ImagesContainer>
            {images.map((item) => {
                const image = getImage(item);
                return (
                    <Image key={item.id}>
                        <GatsbyImage
                            image={image}
                            alt='image'
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Image>
                );
            })}
        </ImagesContainer>
    </Wrapper>
);

export default Gallery;
