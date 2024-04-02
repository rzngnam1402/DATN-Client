import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../axios/hooks/useAuth";

export const SignOut = () => {
    const { clearToken } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        clearToken();
        navigate("/auth/login", { replace: true });
    };

    useEffect(() => {
        handleSignOut();
    });

    return <div>SignOut Page</div>;
};
