import {
  // useState,
  useEffect,
} from 'react';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { connect, useDispatch } from 'react-redux';
import { currentThunk, logoutThunk } from '../redux/thunks';

function App({ isAuth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, []);

  const handleLogOut = () => {
    console.log('click');
    dispatch(logoutThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            {isAuth && (
              <>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                  <button type="button" onClick={handleLogOut}>
                    Log Out
                  </button>
                </li>
              </>
            )}
            {!isAuth && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/contacts"
            element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
          />
          <Route
            path="/login"
            element={<PublicRoute isAuth={isAuth} component={Login} />}
          />
          <Route
            path="/register"
            element={<PublicRoute isAuth={isAuth} component={Register} />}
          />
        </Routes>
      </main>
      {/* <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsList /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, null)(App);
