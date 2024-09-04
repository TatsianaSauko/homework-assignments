import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../api/authService";
import { schema } from "../../utils/validation";
import { login } from "../../redux/slices/authSlice";
import { FormData } from "../../types/types";
import { Notification } from "../Notification";

import "./AuthForm.css";

export const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const [message, setMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data: FormData) => {
        const { email, password } = data;
        setMessage("");

        try {
            const response = await authenticateUser({ email, password });

            if (response.ok) {
                setMessage("Login successful!");
                dispatch(login(email));
                navigate("/");
            } else {
                setMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
        }

        setShowNotification(true);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className="auth-form">
            <h2 className="auth-form__title">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form__wrapper">
                <div>
                    <label className="auth-form__label">Email:</label>
                    <input type="email" {...register("email")} className="auth-form__input" />
                    {errors.email ? (
                        <div className="auth-form__error">{errors.email.message}</div>
                    ) : (
                        <div className="hidden">Placeholder</div>
                    )}
                </div>
                <div>
                    <label className="auth-form__label">Password:</label>
                    <input type="password" {...register("password")} className="auth-form__input" />
                    {errors.password ? (
                        <div className="auth-form__error">{errors.password.message}</div>
                    ) : (
                        <div className="hidden">
                            Password should include 1 number, 1 uppercase letter, 1 lowercase
                            letter, 1 special character
                        </div>
                    )}
                </div>
                <button type="submit" className="auth-form__button">
                    Login
                </button>
            </form>
            {showNotification && (
                <Notification message={message} onClose={handleCloseNotification} />
            )}
        </div>
    );
};
