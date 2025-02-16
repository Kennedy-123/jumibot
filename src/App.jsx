import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import checkLoginStatus from "./utils/check-login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import FallBackLoader from "./components/FallBackLoader";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const TrackedProduct = lazy(() => import("./pages/TrackedProduct"));
const PricingPage = lazy(() => import("./pages/pricing"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

const loginStatus = await checkLoginStatus();

function App() {
  return (
    <Router>
      {loginStatus && <Navbar />}
      <Suspense fallback={<FallBackLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/TrackedProduct" element={<TrackedProduct />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
