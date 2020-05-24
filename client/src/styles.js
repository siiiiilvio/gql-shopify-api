import { injectGlobal } from 'react-emotion';

export const colors = {
    background: '#f7f8fa',
    text: '#343c5a',
};

export default () =>
    injectGlobal({
        [['html', 'body']]: {
            height: '100%',
        },
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "'Source Sans Pro', sans-serif",
            backgroundColor: colors.background,
            color: colors.text,
        },
        '#root': {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
        },
        '*': {
            boxSizing: 'border-box',
        },
    });
