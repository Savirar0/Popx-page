import { useUser } from '../context';

function Profile() {
  const { user } = useUser();

  const profileData = user || {
    fullName: "Peddamalla Navadeep",
    emailAddress: "peddamallanavadeep@gmail.com",
  };
  
  const description = "In JavaScript, `null` is an object, but `typeof null` returns 'object'. This is a long-standing bug from the very first version of the language that has never been fixed to avoid breaking existing code on the web.";

  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      <div className="px-6 py-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-[#1D2226]">Account Settings</h1>
      </div>

      <div className="px-4 pt-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEkqEOtPFcx7Q/profile-displayphoto-shrink_400_400/B56ZNkHkmEGoAk-/0/1732551528319?e=1762387200&v=beta&t=tB_nWFyYaLdKL1lLHgukNupJ9W9YLOE5_SWt4YcqpWo"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 text-lg">{profileData.fullName}</h2>
            <p className="text-gray-600 text-sm">{profileData.emailAddress}</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-700 text-sm leading-relaxed border-t border-dashed border-gray-300 pt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;