import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
    uri: '/graphql'
});

// Esta es mi app.js que mas menos servia

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Switch>

            <Home />

            <p> Hello there this is working!
              Este es App.js </p>


            <Route exact path="/" comoponent={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" comoponent={Signup} />

            </Switch>
            </div>
            <Footer />
            </Router>
            </ApolloProvider>
  );
} 

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className='flex-column justify-flex-start min-100-vh'>
//           <Header />
//           <div className='container'>
//             <Switch>

//               <Route exact path='/' component={Home} />
//               <Route exact path='/login' component={Login} />
//               <Route exact path='/signup' component={Signup} />

//             </Switch>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default App;
