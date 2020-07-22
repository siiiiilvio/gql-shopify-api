import React, { useRef } from 'react';
import Flex from '../components/UI/Flex';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_USER = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
            customer {
                id
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`;

interface Props {}

const Profile: React.FC<Props> = props => {
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
    
    const submitForm = async e => {
        e.preventDefault();
        createUser({
            variables: {
                input: {
                    email: email?.current?.value,
                    password: password?.current?.value,
                },
            },
        });
        email.current!.value = '';
        password.current!.value = '';
    };

    return (
        <Flex justify="center">
            <form onSubmit={e => submitForm(e)}>
                <div>
                    <label htmlFor="email">Enter your email: </label>
                    <input ref={email} type="email" name="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Enter your password: </label>
                    <input ref={password} type="password" name="password" id="password" required />
                </div>
                <div>
                    <input type="submit" value="Add user!" />
                </div>
            </form>
        </Flex>
    );
};

export default Profile;
