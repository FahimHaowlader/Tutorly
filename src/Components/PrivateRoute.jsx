import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DataLoading from "./DataLoading";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
   const { loading, user } = useAuth();
        if (loading) {
            return <DataLoading/>;
        }
        if (user) {
            return children
        } 
        
  return (
    <div>
      <Navigate to="/login" state={location?.pathname}></Navigate>
    </div>
  )
};

export default PrivateRoute;
