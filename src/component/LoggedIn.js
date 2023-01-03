import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoggedIn({ children }) {
  const token = useSelector((state) => state?.auth?.token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default LoggedIn;
