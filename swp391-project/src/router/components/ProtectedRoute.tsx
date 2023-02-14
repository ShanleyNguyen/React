import { AuthContext } from "config/context/auth";
import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface IProtectedRouteProps {
  children?: FC | any;
}
const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  });
  return <>{children}</>;
};

export default ProtectedRoute;
