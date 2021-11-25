import { Navigate } from 'react-router';
export function PrivateRoute({ isAuth, component: C }) {
  return (
    <>
      <h1>PRIVATE</h1>
      {isAuth ? <C /> : <Navigate to="/login" />}
    </>
  );
}
