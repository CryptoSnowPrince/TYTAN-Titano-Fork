import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import Account from "./pages/Account";
import Calculator from "./pages/Calculator";
import Terms from "./pages/Terms";
import MainHome from "./pages/MainHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
