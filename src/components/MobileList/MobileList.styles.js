import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const Project = styled.li`
    display: block;
    height: 80vw;
    width: 80vw;
    margin-bottom: 16px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }
`;
