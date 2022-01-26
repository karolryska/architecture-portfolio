import React, { useRef, useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import gsap from 'gsap';
import { Section, Header, Title, Description, Content, contentTransition } from './Main.styles';

const Main = ({ children, title, description, fullWidth }) => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current.children, {
            ...contentTransition,
            stagger: 0.4,
        });
        gsap.from(contentRef.current.children, {
            ...contentTransition,
            delay: 0.8,
        });
    }, []);

    return (
        <Section>
            <Header ref={headerRef}>
                <Title>{title}</Title>
                {description && (
                    <Description>
                        <MDXRenderer>{description}</MDXRenderer>
                    </Description>
                )}
            </Header>
            <Content ref={contentRef} fullWidth={fullWidth}>
                {children}
            </Content>
        </Section>
    );
};

export default Main;
