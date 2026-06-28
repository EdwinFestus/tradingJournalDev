const Register = () => {
  return (
    <div className="surface-card w-full max-w-md p-8">
      <p className="eyebrow">
        Onboarding
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Create account
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Start using ELLA today.
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />

        <input
          type="email"
          placeholder="Email"
          className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />

        <input
          type="password"
          placeholder="Password"
          className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />

        <button className="h-11 w-full rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800">
          Create account
        </button>
      </form>
    </div>
  );
};

export default Register;
