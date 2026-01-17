import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
    Eye,
    EyeOff,
    Loader2,
    Lock,
    Mail,
    MessagesSquare,
    User,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if (!formData.fullName.trim())
            return toast.error("Full name is required");
        if (!formData.email.trim())
            return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email))
            return toast.error("Invalid email format");
        if (!formData.password)
            return toast.error("Password is required");
        if (formData.password.length < 6)
            return toast.error("Password must be at least 6 characters");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) signup(formData);
    };

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
                            Create your account
                        </h1>

                        <p className="text-sm text-base-content/60">
                            Join ChatNexus and start meaningful conversations
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm font-medium">
                                    Full name
                                </span>
                            </label>

                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40 z-10" />
                                <input
                                    type="text"
                                    className="input input-bordered w-full pl-10"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, fullName: e.target.value })
                                    }
                                />
                            </div>
                        </div>

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
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full font-medium tracking-wide"
                            disabled={isSigningUp}
                        >
                            {isSigningUp ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Creating account
                                </>
                            ) : (
                                "Create account"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-base-content/60">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-primary hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right – Visual */}
            <AuthImagePattern
                title="Join the community"
                subtitle="Connect securely and stay in touch with people who matter."
            />
        </div>
    );
};

export default SignUpPage;
