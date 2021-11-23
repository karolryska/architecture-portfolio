import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

import MainContent from '../components/MainContent';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 769px) {
        flex-direction: row;
    }
`;

const Description = styled.p`
    margin-bottom: 20px;
    text-align: left;
`;

const GraphicsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 769px) {
        margin-left: 100px;
    }
`;

const Image = styled.div`
    height: 300px;
    width: 100%;
    margin: 20px 0;

    @media (min-width: 769px) {
        height: 300px;
        width: 250px;
        margin: 0 0 100px 0;
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
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.6;
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        <Icon>
                            <FaFacebookF />
                        </Icon>
                        <Icon>
                            <FaPinterestP />
                        </Icon>
                        <Icon>
                            <FaLinkedinIn />
                        </Icon>
                    </IconsWrapper>
                </GraphicsWrapper>
            </ContentWrapper>
        </MainContent>
    );
};

export default AboutPage;
