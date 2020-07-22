import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Flex from '../components/UI/Flex';
import { withTheme } from 'styled-components';

const Div = styled.div`
    margin-right: 1rem;

    @media ${({ theme }) => theme.device('max').tablet} {
        width: calc((100% - 1rem) / 2);
        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media ${({ theme }) => theme.device('min').tablet} {
        width: calc((100% - 2rem) / 3);
        &:nth-child(3n) {
            margin-right: 0;
        }
    }
`;

const GET_PRODUCTS = gql`
    query {
        products(first: 20) {
            edges {
                node {
                    id
                    availableForSale
                    createdAt
                    productType
                    description
                    images(first: 1) {
                        edges {
                            node {
                                id
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`;

const last = <T,>(arr: T[]): T => {
    return arr[arr.length - 1];
};

const lastValue: number = last([1, 2, 3]);

const makeArr = <T,>(x: T) => {
    return [x];
};

const v = makeArr(5);
const v2 = makeArr('a');

interface Props {
    theme: {};
}

const Products: React.FC<Props> = props => {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) return <p>'Loading';</p>;
    if (error) return <p>Well ain't that some shit!</p>;
    if (!data) return <p>Not found</p>;

    return (
        <Flex>
            {data?.products?.edges?.map(product => {
                return (
                    <Div key={product.node.id}>
                        <p>
                            {product.node?.images?.edges.map(image => (
                                <img key={image.node?.id} src={image.node?.originalSrc} alt="" />
                            ))}
                        </p>
                        <p>{product.node?.description}</p>
                    </Div>
                );
            })}
        </Flex>
    );
};

export default withTheme(Products);
