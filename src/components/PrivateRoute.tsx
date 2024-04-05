import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
    const user = localStorage.getItem('user');

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return children;
};

export default PrivateRoute;