"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Phone, Mail, Lock } from "lucide-react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Registering: ${fullName}, ${phone}, ${email}`);
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="bg-white/30 backdrop-blur-md border border-blue-300 
                   p-6 rounded-lg shadow-lg w-96 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Register</h2>
        <p className="text-gray-700 mb-6">Create your account</p>

        {/* Full Name */}
        <div className="flex items-center mb-4 border border-gray-300 rounded-md bg-white">
          <span className="px-3 text-gray-500">
            <User />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1 px-2 py-2 focus:outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

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

        {/* Email */}
        <div className="flex items-center mb-4 border border-gray-300 rounded-md bg-white">
          <span className="px-3 text-gray-500">
            <Mail />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Confirm Password */}
        <div className="flex items-center mb-6 border border-gray-300 rounded-md bg-white">
          <span className="px-3 text-gray-500">
            <Lock />
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex-1 px-2 py-2 focus:outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors mb-4"
        >
          Register
        </button>

        {/* Link to login */}
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-700 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
