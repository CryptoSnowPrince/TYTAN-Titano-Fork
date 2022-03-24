import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import Account from "./pages/Account";
import Calculator from "./pages/Calculator";
function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </Layout>
  );
}

export default App;
