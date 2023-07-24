import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const initUser = storedUser ? JSON.parse(storedUser) : null;
    setIsAuthenticated(!!initUser || false);
  }, []);

  // Login User
  const login = async () => {
    try {
      const response = await api.post("/auth/login", inputs);
      if (response.status === 200) {
        setIsAuthenticated(true);
        const { token } = response.data;
        Cookies.set("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoginErrors({});
        setErrorMessage("");
        setInputs({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorData = {};
        error.response.data.errors.forEach((error) => {
          errorData[error.path] = error.msg;
        });
        setLoginErrors(errorData);
      }

      if (error.response.data.error) {
        setErrorMessage(error.response.data.error);
      }
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    Cookies.remove("token");
    navigate("/login");
  };

  const AuthContextValues = {
    inputs,
    setInputs,
    login,
    loginErrors,
    errorMessage,
    isAuthenticated,
    logout,
  };

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
