import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 0 auto;
    max-width: 120rem;
    padding: 0 1.5rem;
`;

const Container = props => {
    return <Div>{props.children}</Div>;
};

export default Container;
