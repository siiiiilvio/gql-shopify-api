import React from 'react';
import Flex from './UI/Flex';

interface Props {
    lightTheme: boolean;
    toggleTheme: (mode: boolean) => void;
}

const ThemeToggle: React.FC<Props> = ({ lightTheme, toggleTheme }) => {
    return (
        <Flex justify="flex-end">
            <button onClick={() => toggleTheme(!lightTheme)}>
                {lightTheme ? 'Dark Mode' : 'Light Mode'}
            </button>
        </Flex>
    );
};

export default ThemeToggle;
