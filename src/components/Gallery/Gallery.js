import React, { useState, useEffect, useRef } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Wrapper, MainImage, ImagesContainer, Image, Button } from './Gallery.styles';
import arrowLeft from '../../assets/icons/arrow_left.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';

const Gallery = ({ images }) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState();
    const wrapperRef = useRef();

    const handleClick = (index) => {
        setMainImageIndex(index);
    };

    const handleClickButton = (direction) => {
        if (direction === 'left') {
            mainImageIndex === 0
                ? setMainImageIndex(images.length - 1)
                : setMainImageIndex(mainImageIndex - 1);
        } else {
            mainImageIndex === images.length - 1
                ? setMainImageIndex(0)
                : setMainImageIndex(mainImageIndex + 1);
        }
    };

    const setWidth = () => setWrapperWidth(wrapperRef.current.offsetWidth);

    useEffect(() => {
        wrapperRef.current && setWidth();
        window.addEventListener('resize', setWidth);

        return () => window.removeEventListener('resize', setWidth);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <MainImage wrapperWidth={wrapperWidth}>
                <GatsbyImage
                    image={getImage(images[mainImageIndex])}
                    alt='image'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
                <Button
                    style={{
                        top: '50%',
                        left: '-40px',
                        transform: 'translateY(-50%)',
                    }}
                    onClick={() => handleClickButton('left')}>
                    <img src={arrowLeft} />
                </Button>
                <Button
                    style={{
                        top: '50%',
                        right: '-40px',
                        transform: 'translateY(-50%)',
                    }}
                    onClick={() => handleClickButton('right')}>
                    <img src={arrowRight} />
                </Button>
            </MainImage>
            <ImagesContainer>
                {images.map((item, i) => {
                    const image = getImage(item);
                    return (
                        <Image
                            key={item.id}
                            onClick={() => handleClick(i)}
                            wrapperWidth={wrapperWidth}>
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
