import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });
    };

    return (
        <main>
            <div className="flex-row justify-center mb-4 signCard">
                <div className="col-12 col-md-6 cardOrder">
                    <div className="card signCard">
                        <h4 className="cardTitle">Login</h4>
                        <div className="cardOrder">
                            <form onSubmit={handleFormSubmit}>
                                <input
                                className="cardOrder"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                                />
                                <input
                                className="cardOrder"
                                placeholder="******"
                                name="password"
                                type="password"
                                id="pwd"
                                value={formState.password}
                                onChange={handleChange}
                                />
                                <button
                                className="btn d-block w-100"
                                style={{ cursor: 'pointer' }}
                                type="submit"
                                >Submit</button>
                            </form>
                            {error && <div>Login failed</div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;