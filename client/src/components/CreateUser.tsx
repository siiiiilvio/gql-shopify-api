import React, { Fragment } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_USER = gql`
    mutation {
        customerCreate(
            input: { email: "user2@example.com", password: "2r7yS#afhi2$@Fd7f24fjkdfs" }
        ) {
            customerUserErrors {
                code
                field
                message
            }
            customer {
                id
                email
            }
        }
    }
`;

function CreateUser() {
    const [create, { data, loading, error }] = useMutation(CREATE_USER);

    if (loading) return 'Loading';
    if (error) return `Well ain't that some shit!`;
    if (!data) return <p>Not found</p>;

    return (
        <Fragment>
            <button onClick={() => create()}>Do some mutation</button>
            {data && data?.customerCreate?.customer?.email}
            {data && data?.customerCreate?.customerUserErrors.map(error => <p>{error.message}</p>)}
        </Fragment>
    );
}

export default CreateUser;
