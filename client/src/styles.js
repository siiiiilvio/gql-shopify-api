import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        background-color: ${({ theme }) => (theme.lightTheme ? '#FFF' : '#999')};
    }

    img {
        max-width: 100%;
    }
`;
