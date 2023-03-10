import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';



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

<form className="searchBar" action="action_page.php">
    <h5>What kind of service are you looking for:</h5>
    <div className="actualSearch">
     <input className="search" type="text" placeholder=" Search..." name="search" />
     <button className="searchBtn" type="submit"><i></i>Search</button>
    </div>
</form>

        {Auth.loggedIn() ? (
            <>
            {/* <p>Welcome, {userData.username}</p>
            <p>Phone: {userData.phone}</p>
            <p>Email: {userData.email}</p> */}
            </>
        ) : (
            <>
            <h3 className="joinText">Join the community! Create a profile or log in!</h3>
            </>
        )}

        <div id="map">Map</div>

        <button>
            <Link to='/map'>MAP!</Link>
        </button>

        <hr />

        <div className="categoriesCards">

        <div class="card eachCard">
        <img src="./img/landscaping.jpeg" className="card-img-top cardPhoto" alt="landscaping" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Landscaping</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/landscaping'>Go Landscaping</Link>
            </button>
        </div>
        </div>

        <div class="card eachCard">
        <img src="./img/cleaningNMaid.jpeg" className="card-img-top cardPhoto" alt="House and cleaning services" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Cleaning & Maid Services</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/cleaning'>Go Cleaning</Link>
            </button>
        </div>
        </div>

        <div class="card eachCard">
        <img src="./img/electricians.jpeg" className="card-img-top cardPhoto" alt="Electrical services" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Electrical Services</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/electrical'>Go Electrical</Link>
            </button>
        </div>
        </div>

        </div>

        <div className="categoriesCards">


        <div class="card eachCard">
        <img src="./img/handyMan.jpeg" className="card-img-top cardPhoto" alt="Handy man" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Handy Man</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/handy'>Go Handy</Link>
            </button>
        </div>
        </div>

        <div class="card eachCard">
        <img src="./img/moving.jpeg" className="card-img-top cardPhoto" alt="Moving Services" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Moving Services</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/moving'>Go Move</Link>
            </button>
        </div>
        </div>

        <div class="card eachCard">
        <img src="./img/pestControl.jpeg" className="card-img-top cardPhoto" alt="Pest Control" />
        <div class="card-body nameNBtn">
            <h5 class="card-title">Pest Control</h5>
            <button className="btn btn-primary buttonGo">
            <Link to='/pest'>Go Pest</Link>
            </button>
        </div>
        </div>


        </div>

        <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>

        </div>
    );
    };

    export default Home;
