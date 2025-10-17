import { useNavigate } from 'react-router-dom';

function Launch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col justify-end px-6 pb-10 relative overflow-hidden">
      
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <p className="text-[18rem] font-black text-gray-200 leading-none select-none">
          POP
        </p>
      </div>
      
      <div className="mb-6 z-10">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-3 z-10">
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-[#6C25FF] text-white py-3 rounded-md font-semibold text-sm transition-colors hover:bg-violet-700"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-[#EDE5FF] text-[#1D1D1D] py-3 rounded-md font-semibold text-sm transition-colors hover:bg-violet-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Launch; 