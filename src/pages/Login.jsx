import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Sign in to your
            <br />
            PopX account
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1.5 text-xs font-semibold text-purple-600 transition-colors group-focus-within:text-purple-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-gray-400"
            />
          </div>

          <div className="relative group">
            <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1.5 text-xs font-semibold text-purple-600 transition-colors group-focus-within:text-purple-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-gray-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-3 px-4 mt-6 rounded-lg font-semibold text-white text-base transition-all duration-300 transform ${
              isLoading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 hover:shadow-xl hover:scale-105 active:scale-95 shadow-md"
            }`}
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}