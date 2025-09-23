"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Lock } from "lucide-react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with ${phone}`);
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="bg-white/30 backdrop-blur-md border border-blue-300 
                   p-6 rounded-lg shadow-lg w-96 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-gray-700 mb-6">Sign into your account</p>

        {/* Phone */}
        <div className="flex items-center mb-4 border border-gray-300 rounded-md bg-white">
          <span className="px-3 text-gray-500">
            <Phone />
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 px-2 py-2 focus:outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mb-4 border border-gray-300 rounded-md bg-white">
          <span className="px-3 text-gray-500">
            <Lock />
          </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-2 py-2 focus:outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors mb-2"
        >
          Login
        </button>

        {/* Forgot Password */}
        <Link
          href="/auth/forgot-password"
          className="text-sm text-gray-700 hover:underline block mb-4"
        >
          Forgot password?
        </Link>

        {/* Register Link */}
        <p className="text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-700 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
