import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => { // логин тууралыгын коргозуп берет
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {// password тууралыгын коргозуп берет
    setIsLoggedIn(false);
  };


  return (

    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />} /* Login туура болсо кийинки бетке откозот*/
        {isLoggedIn && <Home onLogout={logoutHandler} />} /* Home беттен Loginге чыгат */
      </main>
    </React.Fragment>
  );
}

export default App;
