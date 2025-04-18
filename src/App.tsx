import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/authentication/Login";
import Forgot from "./pages/authentication/Forgot";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
        
            <Dashboard />
     
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;