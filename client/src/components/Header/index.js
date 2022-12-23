import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import Login from '../../pages/Login';
import Signup from '../../pages/Signup';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    
// Este es mi header que si servia

    return (
        <header class="headerNav">
        <h1>
            <Link to="/" class="titleHA">Help App</Link>
        </h1>
        <nav>
            {Auth.loggedIn() ? (
            <div>
                <Link to="/profile">Profile</Link>
                <a href="/" onClick={logout}>
                Logout
                </a>
            </div>
            ) : (
            <>
            <div class="LoginSignup">
                <button class="headerBtn">
                <Link path="/Signup" component={Signup} >Signup </Link>
                </button>
                <button class="headerBtn">
                <Link path="/Login" component={Login} >Login</Link>
                </button>
                <p>este es el final del header</p>
            </div>
            </>
            )}
        </nav>
        </header>

    );
    };

    // return (
    //     <header className="bg-secondary mb-4 py-2 flex-row align-center">
    //       <div className="container flex-row justify-space-between-lg justify-center align-center">
    //         <Link to='/'>
    //           <h1>Deep Thoughts</h1>
    //         </Link>
    //         <nav className='text-center'>
    //           {Auth.loggedIn() ? (
    //             <>
    //               <Link to='/profile'>Me</Link>
    //               <a href="/" onClick={logout}>Logout</a>
    //             </>
    //           ) : (
    //               <>
    //                 <Link to='/login'>Login</Link>
    //                 <Link to='/signup'>Signup</Link>
    //               </>
    //             )}
    //         </nav>
    //       </div>
    //     </header>
    //   );
    // };
      

    export default Header;