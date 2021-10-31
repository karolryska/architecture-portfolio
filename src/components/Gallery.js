import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const gridGap = 10;
const calcImageHeight = (containerWidth) => {
    const imageWidth = (containerWidth - 2 * gridGap) / 3;
    return (imageWidth / 3) * 2;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`;

const MainImage = styled.div`
    height: 400px;
    width: 100%;
    margin-bottom: ${gridGap}px;
    background-color: lightgray;
`;

console.log(MainImage.inner);

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${gridGap}px;
    width: 100%;
`;

const Image = styled.div`
    height: ${calcImageHeight(600)}px;
    background-color: lightgray;
`;

const Gallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const handleClick = (index) => {
        setMainImage(images[index]);
    };
    return (
        <Wrapper>
            <MainImage>
                <GatsbyImage
                    image={getImage(mainImage)}
                    alt='image'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </MainImage>
            <ImagesContainer>
                {images.map((item, i) => {
                    const image = getImage(item);
                    return (
                        <Image key={item.id} onClick={() => handleClick(i)}>
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
};

export default Gallery;
