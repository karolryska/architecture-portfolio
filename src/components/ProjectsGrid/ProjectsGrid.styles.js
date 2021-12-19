import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: ${(props) => (props.wrapperWidth - 32) / 3}px;
    grid-gap: 16px;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const Project = styled.li`
    display: block;
    height: 100%;
    width: 100%;
`;
