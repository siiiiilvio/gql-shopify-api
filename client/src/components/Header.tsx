import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Flex from './UI/Flex';

import {
    faTshirt,
    faQuestionCircle,
    faSearch,
    faShoppingBag,
    faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import Container from './UI/Container';

const Nav = styled.nav``;

const Image = styled.img`
    max-width: 50px;
    height: auto;
`;

const StyledLink = styled(Link)`
    color: black;
    padding: 5px;
    &:last-child {
        padding-right: 0;
    }
`;

interface Props {}

const Header: React.FC<Props> = props => {
    return (
        <Nav>
            <Container>
                <Flex justify="space-between" align="center">
                    <div>
                        <Link to="/">
                            <Image src="//cdn.shopify.com/s/files/1/0042/3392/0576/t/1/assets/parra.png?v=9068836468846921000" />
                        </Link>
                    </div>
                    <div>
                        <StyledLink to="/products">
                            <FontAwesomeIcon icon={faTshirt} />
                        </StyledLink>
                        <StyledLink to="/about">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </StyledLink>
                        <StyledLink to="/search">
                            <FontAwesomeIcon icon={faSearch} />
                        </StyledLink>
                        <StyledLink to="/cart">
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </StyledLink>
                        <StyledLink to="/profile">
                            <FontAwesomeIcon icon={faUserAstronaut} />
                        </StyledLink>
                    </div>
                </Flex>
            </Container>
        </Nav>
    );
};

export default Header;
