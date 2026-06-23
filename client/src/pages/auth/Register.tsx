const Register = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-primary">
        Create Account
      </h2>

      <p className="text-gray-500 mt-2">
        Start using Ella today
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-xl p-3"
        />

        <button
          className="w-full bg-primary text-white p-3 rounded-xl"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;