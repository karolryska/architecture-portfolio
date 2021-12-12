import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin-top: 0;

    @media (min-width: 769px) {
        align-items: center;
    }
`;

const first = `
    transform: translateX(40%);
`;

const second = `
    transform: translate(-30%, -10%);
    height: 500px;
    width: 500px;
`;
const third = `
    transform: translateX(40%);
    height: 400px;
    width: 400px;
`;
const fourth = `
    transform: translate(-50%, -10%);
    height: 600px;
    width: 600px;
`;

export const Project = styled.li`
    display: block;
    height: 600px;
    width: 600px;
    background-color: lightgrey;
    margin-bottom: -20px;

    ${(props) => props.number === 1 && first};
    ${(props) => props.number === 2 && second};
    ${(props) => props.number === 3 && third};
    ${(props) => props.number === 4 && fourth};
`;
