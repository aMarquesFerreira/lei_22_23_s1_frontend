import { useState } from "react";

export const authLocalStorage = (email, roles, token, defaultValue) => {
    const [auth, setAuth] = useState(() => {
        try {
            const valueEmail = localStorage.getItem(email);
            const valueRoles = localStorage.getItem(roles);
            const valueToken = localStorage.getItem(token);

            if (valueEmail && valueRoles && valueToken) {
                return JSON.parse(valueEmail,valueRoles,valueToken);
            } else {
                localStorage.setItem("email", JSON.stringify(defaultValue));
                localStorage.setItem("token", JSON.stringify(defaultValue));
                localStorage.setItem("role", JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newEmail, newToken, newRoles) => {
        try {
            localStorage.setItem(email, JSON.stringify(newEmail));
            localStorage.setItem(roles, JSON.stringify(newToken));
            localStorage.setItem(token, JSON.stringify(newRoles));
        } catch (err) { }
        setAuth({ newEmail, newToken, newRoles });
    };
    return [auth, setValue];
};