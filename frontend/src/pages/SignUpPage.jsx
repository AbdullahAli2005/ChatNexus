// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// // import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
// import { Eye } from "lucide-react";
// import { EyeOff } from "lucide-react";
// import { Loader2 } from "lucide-react";
// import { Lock } from "lucide-react";
// import { Mail } from "lucide-react";
// import { MessageSquare } from "lucide-react";
// import { User } from "lucide-react";
// import { Shield } from "lucide-react";

// import { toast } from "react-hot-toast";
// import { Link } from "react-router-dom";

// import AuthImagePattern from "../components/AuthImagePattern";

// const SignUpPage = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         password: "",
//     });

//     const { signup, isSigningUp } = useAuthStore();

//     const validateForm = () => {
//         if (!formData.fullName.trim()) return toast.error("Full name is required");
//         if (!formData.email.trim()) return toast.error("Email is required");
//         if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//         if (!formData.password) return toast.error("Password is required");
//         if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//         return true;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const success = validateForm();

//         if (success === true) signup(formData);
//     };

//     return (
//         <div className="min-h-screen grid lg:grid-cols-2">
//             {/* left side */}

//             <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//                 <div className="w-full max-w-md space-y-8">
//                     {/* LOGO */}
//                     <div className="text-center mb-8">
//                         <div className="flex flex-col items-center gap-2 group">
//                             <div
//                                 className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
//                             >
//                                 <MessageSquare className="size-6 text-primary" />
//                             </div>
//                             <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//                             <p className="text-base-content/60">Get started with your free account</p>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium">Full Name</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none z-10">
//                                     <User className="size-5 text-base-content/40" />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     className={`input input-bordered w-full pl-10`}
//                                     placeholder="John Doe"
//                                     value={formData.fullName}
//                                     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                                 />
//                             </div>
//                         </div>

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium">Email</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//                                     <Mail className="size-5 text-base-content/40" />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     className={`input input-bordered w-full pl-10`}
//                                     placeholder="you@example.com"
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                 />
//                             </div>
//                         </div>

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium">Password</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//                                     <Lock className="size-5 text-base-content/40" />
//                                 </div>
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     className={`input input-bordered w-full pl-10`}
//                                     placeholder="••••••••"
//                                     value={formData.password}
//                                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                                 />
//                                 <button
//                                     type="button"
//                                     className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 >
//                                     {showPassword ? (
//                                         <EyeOff className="size-5 text-base-content/40" />
//                                     ) : (
//                                         <Eye className="size-5 text-base-content/40" />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>

//                         <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
//                             {isSigningUp ? (
//                                 <>
//                                     <Loader2 className="size-5 animate-spin" />
//                                     Loading...
//                                 </>
//                             ) : (
//                                 "Create Account"
//                             )}
//                         </button>
//                     </form>
//                     <div className="text-center">
//                         <p className="text-base-content/60">
//                             Already have an account?{" "}
//                             <Link to="/login" className="link link-primary">
//                                 Sign in
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* right side */}

//             <AuthImagePattern
//                 title="Join our community"
//                 subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//             />
//         </div>
//     )
// }

// export default SignUpPage
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
