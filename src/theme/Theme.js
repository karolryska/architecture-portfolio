import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#000000',
        white: '#FFFFFF',
        blue: '#263BB9',
        burgundy: '#560212',
        navy: '#0F1D40',
        yellow: '#FCC744',
    },
};

const Theme = ({ children }) => <ThemeProvider theme={theme} children={children} />;

export default Theme;
