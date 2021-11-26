import { Navigate } from 'react-router';
export function PrivateRoute({ isAuth, component: C }) {
  console.log('isAuth', isAuth);
  return (
    <>
      <h1>PRIVATE</h1>
      {isAuth ? <C /> : <Navigate to="/login" />}
    </>
  );
}
