import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container bg-white mt-32 text-black flex flex-col">
      <h2 className="text-purple-500 font-bold text-6xl login-text mt-16">
        Login
      </h2>
      <form action="" className="flex flex-col">
        <input
          type="email"
          name=""
          id=""
          className="text-black border-2 outline-none mt-9 h-12 rounded-xl p-3"
          placeholder="Digite seu email"
          required
        />
        <input
          type="password"
          name=""
          id=""
          className="text-black border-2 outline-none mt-9 h-12 rounded-xl p-3"
          placeholder="Digite sua senha"
          required
        />

        <p className="text-gray-400 mt-2 ml-2">
          Ainda não tem conta ? <Link to='/register'><span className="text-purple-500 hover:text-purple-700">Registrar</span></Link>
        </p>

        <button className="h-16 w-56 m-auto bg-purple-500 mt-16 rounded-xl text-white text-4xl hover:scale-110">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
