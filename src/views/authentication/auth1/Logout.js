import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../store/user/UserSlice";

export const SignOut = () => {
    const { clearCredentials } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        clearCredentials();
        dispatch(signOut());
        navigate("/auth/login", { replace: true });
    };

    useEffect(() => {
        handleSignOut();
    });

    return <div>SignOut Page</div>;
};
