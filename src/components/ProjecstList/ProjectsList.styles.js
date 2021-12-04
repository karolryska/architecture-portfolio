import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin-top: 0;

    @media (min-width: 769px) {
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: ${(props) => (props.wrapperWidth - 32) / 3}px;
        grid-gap: 16px;
    }
`;

export const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightgrey;
`;
