import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
    width: 30vw;
    list-style: none;
`;

const Award = styled.p`
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 400;
    cursor: default;
    &:hover {
        color: orange;
    }
`;

const AwardsList = () => (
    <Wrapper>
        <li><Award>Lorem ipsum</Award></li>
        <li><Award>Lorem ipsum</Award></li>
        <li><Award>Lorem ipsum</Award></li>
        <li><Award>Lorem ipsum</Award></li>
    </Wrapper>
);

export default AwardsList;