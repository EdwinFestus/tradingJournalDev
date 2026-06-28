import { ArrowForward, Lock, Mail } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../shared/store/authStore";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[1fr_420px]">
        <section className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-950">
              E
            </div>

            <h1 className="mt-8 max-w-md text-4xl font-bold tracking-normal">
              Trading intelligence for decisive operators.
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Risk", "Journal", "Analytics"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold">
                  {item}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Structured insight, always in context.
                </p>
              </div>
            ))}
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10"
        >
          <p className="eyebrow">
            Secure access
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Sign in to ELLA
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Continue to your trading workspace.
          </p>

          <label className="mt-8 block text-sm font-semibold text-slate-700">
            Email
            <span className="mt-2 flex h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-slate-400">
              <Mail sx={{ color: "#94a3b8", fontSize: 20 }} />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                className="w-full border-0 bg-transparent text-sm font-normal text-slate-950 outline-none placeholder:text-slate-400"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
          </label>

          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Password
            <span className="mt-2 flex h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-slate-400">
              <Lock sx={{ color: "#94a3b8", fontSize: 20 }} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                className="w-full border-0 bg-transparent text-sm font-normal text-slate-950 outline-none placeholder:text-slate-400"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </span>
          </label>

          <button className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800">
            Sign in
            <ArrowForward sx={{ fontSize: 18 }} />
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
