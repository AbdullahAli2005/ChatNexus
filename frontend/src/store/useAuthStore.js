import { create } from 'zustand';
import toast from "react-hot-toast";
import { axiosInstance } from '../lib/axios.js';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoginningIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({ authUser: res.data });

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
            // get().connectSocket(); // Comment this out if you don't have connectSocket defined
        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                // Server responded with an error status (4xx, 5xx)
                toast.error(error.response.data?.message || "Signup failed");
            } else if (error.request) {
                // Request was made but no response received
                toast.error("No response from server. Please check your connection.");
            } else {
                // Something else happened
                toast.error(error.message || "An unexpected error occurred");
            }
            console.error("Signup error:", error);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in successfully");

            // get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
            // get().disconnectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
}))