import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PrivateRoute({  component: Component }) {
  
  const isAuth = useSelector(state => state.isAuth);
  return (
    <>
      {isAuth ? <Component /> : <Navigate to="/login" />}
      
    </>
  );
};


