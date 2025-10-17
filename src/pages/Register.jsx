import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context';

function Register() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setUser(formData);
      setIsLoading(false);
      navigate('/account');
    }, 1500);
  };

  // Common classes for the input fields
  const fieldsetClasses = "border border-gray-300 rounded-lg px-3 py-1.5 transition-all duration-300 focus-within:border-[#6C25FF] focus-within:ring-1 focus-within:ring-[#6C25FF]";
  const legendClasses = "text-xs font-semibold text-[#6C25FF] px-1";
  const inputClasses = "w-full border-none outline-none focus:ring-0 bg-transparent text-gray-700 placeholder-gray-400";

  return (
    <div className="font-rubik min-h-screen bg-[#F7F8F9] px-6 py-8">
      <div className="max-w-sm mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Create your
            <br />
            PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <fieldset className={fieldsetClasses}>
            <legend className={legendClasses}>
              Full Name<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input type="text" name="fullName" placeholder="Marry Doe" className={inputClasses} value={formData.fullName} onChange={handleInputChange} required />
          </fieldset>

          <fieldset className={fieldsetClasses}>
            <legend className={legendClasses}>
              Phone number<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input type="tel" name="phoneNumber" placeholder="9876543210" className={inputClasses} value={formData.phoneNumber} onChange={handleInputChange} required />
          </fieldset>

          <fieldset className={fieldsetClasses}>
            <legend className={legendClasses}>
              Email address<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input type="email" name="emailAddress" placeholder="marry@doe.com" className={inputClasses} value={formData.emailAddress} onChange={handleInputChange} required />
          </fieldset>

          <fieldset className={fieldsetClasses}>
            <legend className={legendClasses}>
              Password<span className="text-[#DD4A3D]">*</span>
            </legend>
            <input type="password" name="password" placeholder="Enter password" className={inputClasses} value={formData.password} onChange={handleInputChange} required />
          </fieldset>

          <fieldset className={fieldsetClasses}>
            <legend className={legendClasses}>Company name</legend>
            <input type="text" name="companyName" placeholder="Doe Inc." className={inputClasses} value={formData.companyName} onChange={handleInputChange} />
          </fieldset>

          <div>
            <p className="text-gray-700 text-sm font-semibold mb-3">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleInputChange} className="w-4 h-4 accent-[#6C25FF] border-gray-300 cursor-pointer" />
                <span className="ml-2 text-gray-700 text-sm">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleInputChange} className="w-4 h-4 accent-[#6C25FF] border-gray-300 cursor-pointer" />
                <span className="ml-2 text-gray-700 text-sm">No</span>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-semibold text-lg text-white bg-[#6C25FF] shadow-md transition-all duration-300 transform hover:bg-[#5A1FE5] hover:shadow-lg hover:scale-105 active:scale-95 disabled:bg-violet-400 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;