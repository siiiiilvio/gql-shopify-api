import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: ${(props: Props) => props.justify};
    align-items: ${(props: Props) => props.align};
`;

interface Props {
    justify?: string;
    align?: string;
}

const Flex: React.FC<Props> = props => {
    return <Div {...props}>{props.children}</Div>;
};

export default Flex;
