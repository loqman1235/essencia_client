import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    password_conf: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", inputs);
      if (response.status === 200) {
        console.log(response);
        setErrors({});
        setInputs({
          username: "",
          email: "",
          address: "",
          password: "",
          password_conf: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorData = {};
        error.response.data.errors.forEach((error) => {
          errorData[error.path] = error.msg;
        });
        setErrors(errorData);
      }
    }
  };

  return (
    <div className="w-full px-5 md:px-10 mb-20 mt-5 flex items-center justify-center">
      <div className="w-full md:w-[540px] border border-gray-200 p-5">
        <h3 className="font-playfair font-bold text-2xl mb-5">S'inscrire</h3>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="username" className="text-sm  text-gray-500">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              placeholder=""
              id="username"
              name="username"
              className={`border ${
                !errors.username ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              onChange={handleInputChange}
              value={inputs.username}
            />
            {errors.username && (
              <p className="text-sm text-red-600">{errors.username}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="email" className="text-sm  text-gray-500">
              Adresse e-mail
            </label>
            <input
              type="text"
              placeholder=""
              id="email"
              name="email"
              className={`border ${
                !errors.email ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              onChange={handleInputChange}
              value={inputs.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="address" className="text-sm  text-gray-500">
              Adresse de livraison
            </label>
            <input
              type="text"
              placeholder=""
              id="address"
              name="address"
              className={`border ${
                !errors.address ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              onChange={handleInputChange}
              value={inputs.address}
            />
            {errors.address && (
              <p className="text-sm text-red-600">{errors.address}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="password" className="text-sm  text-gray-500">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder=""
              id="password"
              name="password"
              className={`border ${
                !errors.password ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              autoComplete="off"
              onChange={handleInputChange}
              value={inputs.password}
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="password_conf" className="text-sm  text-gray-500">
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              placeholder=""
              id="password_conf"
              name="password_conf"
              className={`border ${
                !errors.password_conf ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              autoComplete="off"
              onChange={handleInputChange}
              value={inputs.password_conf}
            />
            {errors.password_conf && (
              <p className="text-sm text-red-600">{errors.password_conf}</p>
            )}
          </div>
          <p className="mb-4">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="text-[#007474]">
              Connectez-vous
            </Link>
          </p>

          <button className="primary_btn w-full">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
