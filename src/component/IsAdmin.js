import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const isAdmin = useSelector((state) => state?.profile.user.isAdmin);
  if (isAdmin === "true") {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default IsAdmin;
