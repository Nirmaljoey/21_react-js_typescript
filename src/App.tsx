import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import AuthGuard from "./components/AuthGuard";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const ListingsPage = lazy(() => import("./pages/ListingsPage"));
const RegistrationForm = lazy(() => import("./pages/RegistrationForm"));
const UserAuthorization = lazy(() => import("./pages/UserAuthorization"))
const PasswordRecovery = lazy(() => import("./components/PasswordRecovery"));
const PersonalAccount = lazy(() => import("./pages/PersonalAccount"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <div className="app-content">
          <Suspense fallback={<div className="text-center text-lg font-semibold mt-10">🔄 Loading...</div>}>
            <Routes>
              {/* 🔹 Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<UserAuthorization />} />
              <Route path="/password-recovery" element={<PasswordRecovery />} />

              <Route
                path="/personal-account/profile"
                element={
                  <AuthGuard>
                    <PersonalAccount />
                  </AuthGuard>
                }
              />
              <Route
                path="/personal-account/profile/listings"
                element={
                  <AuthGuard>
                    <ListingsPage />
                  </AuthGuard>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
