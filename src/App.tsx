import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/authentication/Login";
import Forgot from "./pages/authentication/Forgot";
import { MainLayout } from "./layouts/MainLayout";
import FloristList from "./pages/florist/FloristList";
import UserList from "./pages/user/UserList";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />

        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Dashboard />
            }
          />
          <Route
            path="/florists"
            element={
              <FloristList />
            }
          />
          <Route
            path="/users"
            element={
              <UserList />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;