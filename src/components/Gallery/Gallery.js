import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Wrapper, MainImage, ImagesContainer, Image } from './Gallery.styles';

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
