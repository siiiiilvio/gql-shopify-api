import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';
import AppRouter from './components/AppRouter';
import ThemeToggle from './components/ThemeToggle';
import { device } from './mediaQueries';

const App: React.FC = () => {
    //TODO set and get theme from local storage
    const [lightTheme, toggleTheme] = useState(true);
    return (
        <ThemeProvider
            theme={{
                lightTheme,
                device,
            }}
        >
            <GlobalStyle />
            <ThemeToggle lightTheme={lightTheme} toggleTheme={toggleTheme} />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
