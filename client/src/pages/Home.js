import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

const Home = () => {
    // const { loading, error, data } = useQuery(QUERY_USER);
    // const userData = data?.me || data?.user || {};
    
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div> `ERROR ${error.message}` </div>
    // }
    
    return (
        <div>
        <h2>Home is working</h2>
        {Auth.loggedIn() ? (
            <>
            {/* <p>Welcome, {userData.username}</p>
            <p>Phone: {userData.phone}</p>
            <p>Email: {userData.email}</p> */}
            </>
        ) : (
            <>
            <p>You need to be logged in to see this page. Use the navigation links above to sign up or log in!</p>
            </>
        )}
        </div>
    );
    };

    export default Home;
