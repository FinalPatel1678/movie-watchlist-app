import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/AuthContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      return;
    }
    login(email);
    router.push("/"); // Redirect to home page after login
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded-lg px-10 py-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <input
          className="block mb-6 w-full py-2 px-4 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-block"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
