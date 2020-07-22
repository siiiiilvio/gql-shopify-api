import React from 'react';
import styled from 'styled-components';

const Div = styled.div``;

interface Props {}

const Box: React.FC<Props> = props => {
    return <Div>{props.children}</Div>;
};

export default Box;
