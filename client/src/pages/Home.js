import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_USER } from '../utils/queries';
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

<form class="example" action="action_page.php">
    <h1>What kind of service are you looking for:</h1>
  <input type="text" placeholder="Search.." name="search" />
  <button type="submit"><i class="fa fa-search"></i></button>
</form>

        <p>This is home</p>
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

        <p>This is also part of home</p>

        <div class="card">
        <img src="./img/landscaping.jpeg" class="card-img-top" alt="landscaping" />
        <div class="card-body">
            <h5 class="card-title">Landscaping</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/cleaningNMaid.jpeg" class="card-img-top" alt="House and cleaning services" />
        <div class="card-body">
            <h5 class="card-title">Cleaning and Maid Services</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/electricians.jpeg" class="card-img-top" alt="Electrical services" />
        <div class="card-body">
            <h5 class="card-title">Electrical Services</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/handyMan.jpeg" class="card-img-top" alt="Handy man" />
        <div class="card-body">
            <h5 class="card-title">Handy Man</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/moving.jpeg" class="card-img-top" alt="Moving Services" />
        <div class="card-body">
            <h5 class="card-title">Moving Services</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/pestControl.jpeg" class="card-img-top" alt="Pest Control" />
        <div class="card-body">
            <h5 class="card-title">Pest Control</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card">
        <img src="./img/smallApInstallation.jpeg" class="card-img-top" alt="Appliance Installation" />
        <div class="card-body">
            <h5 class="card-title">Small Apliance Installation</h5>
            <p class="card-text">Sale caloooor.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>


        <p>Este va a ser el final de home</p>

        </div>
    );
    };

    export default Home;
