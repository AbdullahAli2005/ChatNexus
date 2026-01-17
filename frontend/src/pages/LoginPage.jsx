import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessagesSquare } from "lucide-react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login, isLoggingIn } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };
    console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);
    console.log("loooood");
    
    return (

        <div className="h-screen grid lg:grid-cols-2">
            {/* Left – Form */}
            <div className="flex items-center justify-center px-6 sm:px-12">
                <div className="w-full max-w-md space-y-10">
                    {/* Brand */}
                    <div className="text-center space-y-3">
                        <div className="mx-auto size-12 rounded-md border border-primary/40 flex items-center justify-center">
                            <MessagesSquare className="w-6 h-6 text-primary stroke-[1.6]" />
                        </div>

                        <h1 className="text-2xl font-medium tracking-wide">
                            Welcome back
                        </h1>

                        <p className="text-base-content/60 text-sm">
                            Sign in to continue to ChatNexus
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm font-medium">
                                    Email address
                                </span>
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40 z-10" />

                                <input
                                    type="email"
                                    className="input input-bordered w-full pl-10"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm font-medium">
                                    Password
                                </span>
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40 z-10" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pl-10 pr-10"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 z-10"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-base-content/40" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-base-content/40" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full font-medium tracking-wide"
                            disabled={isLoggingIn}
                        >
                            {isLoggingIn ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Signing in
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-base-content/60">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-primary hover:underline"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right – Visual */}
            <AuthImagePattern
                title="Welcome back"
                subtitle="Continue your conversations and stay connected."
            />
        </div>
    );
};

export default LoginPage;
