import { MessagesSquare } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 px-16">
            <div className="max-w-md w-full text-center">
                {/* Chat Illustration */}
                <div className="relative mb-12">
                    {/* Left bubble */}
                    <div className="w-56 p-4 mb-4 rounded-xl border border-primary/20 bg-base-100 text-left">
                        <div className="h-3 w-32 bg-primary/20 rounded mb-2" />
                        <div className="h-3 w-24 bg-primary/10 rounded" />
                    </div>

                    {/* Right bubble */}
                    <div className="w-56 p-4 ml-auto mb-4 rounded-xl border border-primary/30 bg-base-100 text-left">
                        <div className="h-3 w-28 bg-primary/20 rounded mb-2" />
                        <div className="h-3 w-36 bg-primary/10 rounded" />
                    </div>

                    <div className="w-56 p-4 mb-4 rounded-xl border border-primary/20 bg-base-100 text-left">
                        <div className="h-3 w-32 bg-primary/20 rounded mb-2" />
                        <div className="h-3 w-24 bg-primary/10 rounded" />
                    </div>

                    {/* Icon anchor */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-12 rounded-md border border-primary/40 bg-base-100 flex items-center justify-center">
                        <MessagesSquare className="w-6 h-6 text-primary stroke-[1.6]" />
                    </div>
                </div>

                {/* Text */}
                <h2 className="text-2xl font-medium tracking-wide mb-3">
                    {title}
                </h2>

                <p className="text-base-content/60 text-sm leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default AuthImagePattern;
