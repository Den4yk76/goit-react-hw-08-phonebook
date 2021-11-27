import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Registration/Login';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from './routers/PrivateRoute';
import { PublicRoute } from './routers/PublicRoute';
import { PhonePage } from './pages/PhonePage.jsx';
import { fetchCurrentUser } from './redux/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.error);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchCurrentUser(localStorage.getItem('token')));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast('something went wrong, please try again later');
    }
  }, [isError]);

  return (
    <>
      <AppBar />

      <main>
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute component={Registration} />}
          />

          <Route path="/login" element={<PublicRoute component={Login} />} />

          <Route
            path="/contacts"
            element={<PrivateRoute component={PhonePage} />}
          />
        </Routes>
      </main>
      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={150} width={150} />
      )}

      <ToastContainer />
    </>
  );
}
