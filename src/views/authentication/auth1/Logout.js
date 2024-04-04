import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../axios/hooks/useAuth";

export const SignOut = () => {
    const { clearCredentials } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        clearCredentials();
        navigate("/auth/login", { replace: true });
    };

    useEffect(() => {
        handleSignOut();
    });

    return <div>SignOut Page</div>;
};
