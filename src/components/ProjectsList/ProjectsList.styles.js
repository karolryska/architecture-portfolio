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

const first = (wrapperWidth) => {
    return `
        transform: translateX(40%);
        height: ${wrapperWidth * 0.5}px;
        width: ${wrapperWidth * 0.5}px;
    `;
};
const second = (wrapperWidth) => {
    return `
        transform: translate(-30%, -10%);
        height: ${wrapperWidth * 0.35}px;
        width: ${wrapperWidth * 0.35}px;
    `;
};

const third = (wrapperWidth) => {
    return `
        transform: translateX(40%);
        height: ${wrapperWidth * 0.35}px;
        width: ${wrapperWidth * 0.35}px;
    `;
};

const fourth = (wrapperWidth) => {
    return `
        transform: translate(-50%, -10%);
        height: ${wrapperWidth * 0.5}px;
        width: ${wrapperWidth * 0.5}px;
    `;
};

export const Project = styled.li`
    display: block;
    height: 80vw;
    width: 80vw;
    margin-bottom: 16px;

    @media (min-width: 769px) {
        margin-bottom: -20px;
        ${(props) => props.number === 1 && first(props.wrapperWidth)};
        ${(props) => props.number === 2 && second(props.wrapperWidth)};
        ${(props) => props.number === 3 && third(props.wrapperWidth)};
        ${(props) => props.number === 4 && fourth(props.wrapperWidth)};
    }
`;
