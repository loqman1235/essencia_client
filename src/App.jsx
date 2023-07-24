import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
        <Route path="/register" element={<PublicRoute />}>
          <Route index element={<RegisterPage />} />
        </Route>
        <Route path="/login" element={<PublicRoute />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default App;
