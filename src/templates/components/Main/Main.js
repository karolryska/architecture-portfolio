import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useWidth from '../../../hooks/useWidth';
import { Section, Header, Title, Description, Content, contentTransition } from './Main.styles';

const Main = ({ children, title, description, descritpionMobile, fullWidth }) => {
    const [isMobile] = useWidth();

    return (
        <Section isMobile={isMobile}>
            <Header>
                <Title
                    isMobile={isMobile}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={contentTransition}>
                    {title}
                </Title>
                {description && (
                    <Description visibleOnMobile={descritpionMobile}>
                        <MDXRenderer>{description}</MDXRenderer>
                    </Description>
                )}
            </Header>
            <Content fullWidth={fullWidth}>{children}</Content>
        </Section>
    );
};

export default Main;
