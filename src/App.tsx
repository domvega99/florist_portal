import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/authentication/Login";
import Forgot from "./pages/authentication/Forgot";
import { MainLayout } from "./layouts/MainLayout";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />

        <Route element={<MainLayout />}>
        {/* Protected Routes */}
        <Route
          path="/"
          element={
        
            <Dashboard />
     
          }
        />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;