import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    //submit dorm using async
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <main>
            <div className="flex-row justify-center mb-4 signCard">
                <div className="col-12 col-md-6 cardOrder">
                    <div className="card signCard">
                        <h4 className="cardTitle">Sign Up</h4>
                        <div className="cardOrder">
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="cardOrder"
                                    placeholder="Your username"
                                    name="username"
                                    type="username"
                                    id="username"
                                    value={formState.username}
                                    onChange={handleChange}
                                />
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
                                >
                                    Submit
                                </button>
                            </form>
                            {error && <div>Sign up failed</div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
