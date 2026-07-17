import { create } from "zustand";
import {
    loginUser,
    registerUser
}   from "../services/authService" ;


interface AuthState {
    user: {
        id: string,
        username: string,
        email: string,
    } | null;

    token: string | null;

    login: (
        email: string,
        password: string,
    ) => Promise<void>;

    register: (
        username: string,
        email: string,
        password: string,
    ) => Promise<void>;

    logout: () => void;

}



export const useAuthStore = create<AuthState> ((set)=> ({
    user: null,
    token: localStorage.getItem("token"),

    login: async ( email, password ) => {
        const data = await loginUser({
            email,
            password,
        });
        
        localStorage.setItem("token", data.token);


        set({
            user: data.user,
            token: data.token,
        });
    },

    register: async (
        username,
        email,
        password,
    ) => {
        const data = await registerUser({
            username,
            email,
            password,
        })

        localStorage.setItem("token", data.token );

        set({
            user: data.user,
            token: data.token,
        });
    },

    logout: () => {
        localStorage.removeItem("token");

        set({
            user: null,
            token: null,
        })
    }
}))