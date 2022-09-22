import "./App.css";
import Signin from "./components/Signin/Signin";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import Users from "./components/Users/Customers";
import Home from "./components/Home/Home";
import Customers from "./components/Users/Customers";
import FlashSale from "./components/Products/FlashSale/FlashSale";
import { TermsConditions } from "./components/NavBar/TermsConditions";
import { Trackorder } from "../src/components/Trackorder";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/e-commerce-application" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected Routes */}
          {/* <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="users" element={<Users />} />
          <Route path="flashsale" element={<FlashSale />} />
          <Route path="termsconditions" element={<TermsConditions />} />
          <Route path="/trackmyorder" component={Trackorder} />

          {/* if URL is not found */}
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
