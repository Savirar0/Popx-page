import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context";
import Launch from "./pages/Launch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile"; 

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen max-w-md mx-auto bg-white">
          <Routes>
            <Route path="/" element={<Launch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;