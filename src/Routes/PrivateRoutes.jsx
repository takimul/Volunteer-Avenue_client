import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Components/Loading";
import { Navigate, useLocation, } from "react-router-dom";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;