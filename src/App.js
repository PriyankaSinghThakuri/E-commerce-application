import "./App.css";
import Signin from "./components/Signin/Signin";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import Users from "./components/Users/Users";
import Admin from "./components/Admin/Admin";
import MobileandTablets from "./components/Categories/MobileAndTablets/MobileAndTablets";
import ComputerAndLaptops from "./components/Categories/ComputersandLaptops/ComputersandTablets";
import HomeAppliances from "./components/Categories/HomeAppliances/HomeAppliances";
import SmartWatches from "./components/Categories/SmartWatches/SmartWatches";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/E-commerce-application" element={<Dashboard />}>
            <Route path="mobileandtablets" element={<MobileandTablets />} />
            <Route path="computerandlaptops" element={<ComputerAndLaptops />} />
            <Route path="homeappliances" element={<HomeAppliances />} />
            <Route path="smartwatches" element={<SmartWatches />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="admin" element={<Admin />}>
            <Route path="users" element={<Users />} />
          </Route>

          {/* if URL is not found */}
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
