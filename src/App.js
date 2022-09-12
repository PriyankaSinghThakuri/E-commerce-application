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
import Home from "./components/Home/Home";

function App() {
  return (
    <AuthProvider>
      {/* <NavBar/> */}
      <div className="App">
        <Routes>
          <Route path="/e-commerce-application" element={<Home />} />
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
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
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
