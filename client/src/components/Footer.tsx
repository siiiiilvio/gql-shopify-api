import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Flex from './UI/Flex';

import { faBook, faHamburger } from '@fortawesome/free-solid-svg-icons';
import Container from './UI/Container';

const StyledLink = styled(Link)``;

interface Props {}

const Footer: React.FC<Props> = props => {
    return (
        <Container>
            <Flex justify="space-between" align="center">
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/faq">FAQ</StyledLink>
                <StyledLink to="/returns">Returns</StyledLink>
                <StyledLink to="/shipping">Shipping</StyledLink>
                <StyledLink to="/newsletter">Newsletter</StyledLink>
                <StyledLink to="/retailers">Retailers</StyledLink>
                <StyledLink to="/privacy">Privacy & Terms</StyledLink>
                <Link to="/">
                    <FontAwesomeIcon icon={faBook} />
                    <FontAwesomeIcon icon={faHamburger} />
                </Link>
            </Flex>
        </Container>
    );
};

export default Footer;
