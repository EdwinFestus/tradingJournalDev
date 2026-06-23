import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 ">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

                <h1 className="text-5xl font-bold mb-6">
                    Project Ella 
                </h1>

                <p className="text-lg opacity-90 mb-8">
                    Professional Trading Journal & Analytics Platform
                </p>

                <div className="space-y-4">
                    <div>/ Track Trades </div>
                    <div>/ Analyze Performance </div>
                    <div>/ Imrove Consistency</div>
                    <div>/ Grow Like A Pro Trader</div>

                </div>

            </div>

            {/* Right Side */}

            <div className="bg-white p-8 md:p-12">
                {children}
            </div>
        </div>
    )
}