import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

import MainContent from '../templates/components/Main/Main';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 769px) {
        flex-direction: row;
    }
`;

const Description = styled.p`
    margin: 0 0 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
`;

const GraphicsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 769px) {
        margin-left: 100px;
        justify-content: start;
    }
`;

const Image = styled.div`
    height: 260px;
    width: 100%;
    margin: 20px 0;

    @media (min-width: 769px) {
        height: 260px;
        width: 200px;
        margin: 0 0 30px 0;
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: ${(props) => props.color};
    /* background-color: black; */
    color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.colors.yellow};
    }

    & svg {
        font-size: 15px;
    }
`;

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: { title: { eq: "about" } }) {
                body
                frontmatter {
                    hero_image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <MainContent title='About me' description={data.mdx.body}>
            <ContentWrapper>
                <Description style={{ display: 'inline-block' }}>
                    I have a lot of professional experience and several victories in competitions. I
                    am currently working full time in 22 architects in Warsaw. In his free time he
                    designs interiors for individual clients. Hence, I strongly encourage you to
                    familiarize yourself with my interior designs. Personally, I am a very
                    open-minded and outgoing person. Contact and cooperation is easy with me. My
                    interests are snowboarding, surfing, drawing and my bike. I need to write
                    something more about you because I feel like it makes more harmony in text. What
                    do you think? And maybe one more line. I think we can figure it out what you
                    should write here. It will not be that hard I guess. A few more words.
                </Description>
                <GraphicsWrapper>
                    <Image>
                        <GatsbyImage
                            image={image}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </Image>
                    <IconsWrapper>
                        <Icon color={(props) => props.theme.colors.blue}>
                            <FaFacebookF />
                        </Icon>
                        <Icon color={(props) => props.theme.colors.burgundy}>
                            <FaPinterestP />
                        </Icon>
                        <Icon color={(props) => props.theme.colors.navy}>
                            <FaLinkedinIn />
                        </Icon>
                    </IconsWrapper>
                </GraphicsWrapper>
            </ContentWrapper>
        </MainContent>
    );
};

export default AboutPage;
