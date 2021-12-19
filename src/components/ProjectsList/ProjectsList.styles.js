import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
`;

const first = (wrapperWidth) => {
    return `
        margin-bottom: -${wrapperWidth * 0.5 * 0.4}px;
        transform: translate(40%);
        height: ${wrapperWidth * 0.5}px;
        width: ${wrapperWidth * 0.5}px;
    `;
};
const second = (wrapperWidth) => {
    return `
        margin-bottom: ${wrapperWidth * 0.35 * 0.1}px;
        transform: translateX(-30%);
        height: ${wrapperWidth * 0.35}px;
        width: ${wrapperWidth * 0.35}px;
    `;
};

const third = (wrapperWidth) => {
    return `
        margin-bottom: -${wrapperWidth * 0.5 * 0.3}px;
        transform: translateX(40%);
        height: ${wrapperWidth * 0.35}px;
        width: ${wrapperWidth * 0.35}px;
        z-index: 100;
    `;
};

const fourth = (wrapperWidth) => {
    return `
        margin-bottom: ${wrapperWidth * 0.35 * 0.1}px;
        transform: translateX(-40%);
        height: ${wrapperWidth * 0.5}px;
        width: ${wrapperWidth * 0.5}px;
    `;
};

export const Project = styled.li`
    display: block;
    margin-bottom: 0;
    ${(props) => props.number === 1 && first(props.wrapperWidth)};
    ${(props) => props.number === 2 && second(props.wrapperWidth)};
    ${(props) => props.number === 3 && third(props.wrapperWidth)};
    ${(props) => props.number === 4 && fourth(props.wrapperWidth)};
`;
