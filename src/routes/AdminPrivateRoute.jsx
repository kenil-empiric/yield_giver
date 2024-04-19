import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminPrivateRoute({ children }) {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state) => state.IsAdmin);
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);
  return isAdmin ? children : null;
}

export default AdminPrivateRoute;
