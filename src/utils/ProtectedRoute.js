import React from "react";
import { useState } from "react";
import { useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

export const ProtectedRoute = ({Component}) => {
  const [loginStatus, setLoginStatus] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const wallet =window.localStorage.getItem("wallet");  
        if (!wallet){
            toast.error("Authentication Failed !"); 
            navigate("/")
        }
        setLoginStatus(false)
      } catch (error) {
        console.log(error);
      }
    };
    checkLogin();
  }, []);

  return (
    <div style={{minHeight:"80vh"}}>
      {loginStatus ?  <span>Loading...</span>: <Component />}
    </div>
  );
};
