import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    a {
        color: ${({ theme }) => theme.text};
    }
    .section-cont {
        background: ${({ theme }) => theme.body};
    }
    button {
        color: ${({ theme }) => theme.text};
    }
}
`

export const lightTheme = {
    body: '#F2F2F2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
    body: '#141414',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
}