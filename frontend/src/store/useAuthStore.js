import { create } from 'zustand';
import toast from "react-hot-toast";
import { axiosInstance } from '../lib/axios.js';
import { io } from "socket.io-client";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoginningIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
            get().connectSocket();
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    // signup: async (data) => {
    //     set({ isSigningUp: true });
    //     try {
    //         const res = await axiosInstance.post("/auth/signup", data);
    //         set({ authUser: res.data });
    //         toast.success("Account created successfully");
    //         // get().connectSocket();
    //     } catch (error) {
    //         toast.error(error.response.data.message);
    //     } finally {
    //         set({ isSigningUp: false });
    //     }
    // },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
            get().connectSocket();
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data?.message || "Signup failed");
            } else if (error.request) {
                toast.error("No response from server. Please check your connection.");
            } else {
                toast.error(error.message || "An unexpected error occurred");
            }
            console.error("Signup error:", error);
        } finally {
            set({ isSigningUp: false });
        }
    },

    // login: async (data) => {
    //     set({ isLoggingIn: true });
    //     try {
    //         const res = await axiosInstance.post("/auth/login", data);
    //         set({ authUser: res.data });
    //         toast.success("Logged in successfully");
    //         console.log("User logged in with id:", user._id);


    //         // get().connectSocket();
    //     } catch (error) {
    //         toast.error(error.response.data.message);
    //     } finally {
    //         set({ isLoggingIn: false });
    //     }
    // },
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });

            console.log("User logged in with id:", res.data._id);
            toast.success("Logged in successfully");

            get().connectSocket();

        } catch (error) {
            console.log("Login error:", error);
            toast.error(error.response?.data?.message || "Login failed");
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
            get().disconnectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            // const res = await axiosInstance.put("/auth/update-profile", data);
            const res = await axiosInstance.put("/auth/update-profile", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("error in update profile:", error);
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

    connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) return;

        // const socket = io(BASE_URL, {
        //     query: {
        //         userId: authUser._id,
        //     },
        // });
        const socket = io(BACKEND_URL, {
    query: {
        userId: authUser._id,
    },
    reconnection: true,
    transports: ["websocket", "polling"], // try websocket first
    withCredentials: true,
});
        socket.connect();

        set({ socket: socket });

        socket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds });
        });

    socket.on("connect", () => console.log("Socket connected – ID:", socket.id));
    socket.on("connect_error", (err) => console.error("Socket connect error:", err.message));
    },

    disconnectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect();
    },
}))