import { useEffect } from 'react';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentThunk, logoutThunk } from '../redux/thunks';

const isAuth = true;
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const handleLogOut = () => {
    console.log('click');
    dispatch(logoutThunk());
  };

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button type="button" onClick={handleLogOut}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/contacts"
            isAuth={isAuth}
            element={<PrivateRoute component={Contacts} />}
          />
          <Route
            path="/login"
            isAuth={isAuth}
            element={<PublicRoute component={Login} />}
          />
          <Route
            path="/register"
            isAuth={isAuth}
            element={<PublicRoute component={Register} />}
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
