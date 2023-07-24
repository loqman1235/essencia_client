import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login, inputs, setInputs, loginErrors, errorMessage } =
    useContext(AuthContext);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="w-full px-5 md:px-10 mb-20 mt-5 flex items-center justify-center">
      <div className="w-full md:w-[540px] border border-gray-200 p-5">
        <h3 className="font-playfair font-bold text-2xl mb-5">
          Connectez-vous
        </h3>
        <form onSubmit={handleLogin}>
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
                !loginErrors.email ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              onChange={handleInputChange}
              value={inputs.email}
            />
            {loginErrors.email && (
              <p className="text-sm text-red-600">{loginErrors.email}</p>
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
                !loginErrors.password ? "border-gray-200 " : "border-red-600 "
              } outline-none p-3 w-full`}
              autoComplete="off"
              onChange={handleInputChange}
              value={inputs.password}
            />
            {loginErrors.password && (
              <p className="text-sm text-red-600">{loginErrors.password}</p>
            )}

            {errorMessage && (
              <span className="text-red-600 text-sm">{errorMessage}</span>
            )}
          </div>

          <p className="mb-4">
            Pas encore inscrit ?{" "}
            <Link to="/register" className="text-[#007474]">
              Inscrivez-vous
            </Link>
          </p>

          <button className="primary_btn w-full">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
