import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    
// Este es mi header que si servia

    // return (
    //     <header class="headerNav">
    //     <h1>
    //         <Link to="/" class="titleHA">Help App</Link>
    //     </h1>
    //     <nav>
    //         {Auth.loggedIn() ? (
    //         <div>
    //             <Link to="/profile">Profile</Link>
    //             <a href="/" onClick={logout}>
    //             Logout
    //             </a>
    //         </div>
    //         ) : (
    //         <>
    //         <div class="LoginSignup">
    //             <button class="headerBtn" onClick={Signup}>
    //             <Link to="/signup" comoponent={Signup} >Signup </Link>
    //             </button>
    //             <button class="headerBtn">
    //             <Link to="/login" >Login</Link>
    //             </button>
    //         </div>
    //         </>
    //         )}
    //     </nav>
    //     </header>

    // );
    // };

    return (
        <header className="containerNav">
          <div className="headerNav">
            <Link to='/'>
              <h1 className="headerTitle">Help App</h1>
            </Link>
            <nav className='text-center'>
              {Auth.loggedIn() ? (
                <>
                  <Link to='/profile'>Me</Link>
                  <a href="/" onClick={logout}>Logout</a>
                </>
              ) : (
                  <>
                  <div className="LoginSignup">
                    <button className="headerBtn">
                    <Link to='/login'>Login</Link>
                    </button>
                    <button className="headerBtn">
                    <Link to='/signup'>Signup</Link>
                    </button>
                  </div>
                  </>
                )}
            </nav>
          </div>
        </header>
      );
    };
      

    export default Header;