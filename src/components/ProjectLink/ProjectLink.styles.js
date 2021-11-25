import styled from 'styled-components';

export const Wrapper = styled.li`
    position: relative;
    display: block;
    height: 80vw;
    width: 100%;
    margin-bottom: 16px;
    overflow: hidden;

    @media (min-width: 769px) {
        height: 100%;
        width: 100%;

        &:before {
            content: '${(props) => props.title}';
            position: absolute;
            z-index: 100;
            top: 50%;
            left: 50%;
            color: white;
            transform: translate(-50%, -50%);
            opacity: 0;
        }
        &:hover:before {
            opacity: 1;
        }
    }
`;
