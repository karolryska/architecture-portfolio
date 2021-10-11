import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import styles from "./Layout.module.css";

const paths = [
    ["projects", "projects"],
    ["interiors", "interiors"],
    ["awards", "awards"],
    ["about", "about me"]
]

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr 20px;
    min-height: 100vh;
    max-width: 1200px;
    margin: auto;
    background-color: lightgray;
`;

const Main = styled.main`
    align-self: stretch;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: grey;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const NavItem = styled.li`
    margin-left: 60px;
    color: black;
    text-decoration: none;
`;

const Logo = styled.div`
    height: 40px;
    width: 40px;
    background-color: black;
`;

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 100%;
    padding: 100px 0;
`;

const Content = styled.article`
    height: 100%;
    width: 45vw;
    padding: 0 80px;
    background-color: white;
`;

const Footer = styled.footer`
    height: 100%;
    text-align: center;
`;

const Layout = ({ children, title }) => {
    return (
        <Wrapper>
            <Header>
                <Logo />
                <nav>
                    <NavList>
                        {paths.map(item => (
                            <NavItem>
                                <Link to={`/${item[0]}`}>{item[1]}</Link>
                            </NavItem>
                        ))}
                    </NavList>
                </nav>
            </Header>
            <Main>
                <Section>
                    <h2>{title}</h2>
                    <Content>{children}</Content>
                </Section>
            </Main>
            <Footer><p>code by</p></Footer>
        </Wrapper>
    )
};

export default Layout;