import Button from "../../../helpers/Button";
import Inputs from "../../../helpers/Inputs";
import Title from "../../../helpers/Title";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './Login.css';
let urlUsuario = "http://localhost:3000/user";


function Login() {

  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getEstadoUsuario, setEstadoUsuario] = useState([]);
  const redireccion = useNavigate();

  async function backUsers() {
    let resultado = await axios.get(urlUsuario);
    setEstadoUsuario(resultado.data);
  }

  useEffect(() => {
    backUsers()
    console.log(backUsers());
  }, []);


  function buscarUser() {
    return getEstadoUsuario.some((data) => data.usuario === getUsuario);
  }
  function buscarContra() {
    return getEstadoUsuario.some((data) => data.contrasena === getContrasena);
  }

  function registrarUsuario() {
    if ((buscarUser()) && (buscarContra())) {
      redireccion("/home");
    } else {
      alert("Usuario NO existe");
    }
  }

  return (
    <div className="container">
      <section id="login" className="form-login1 visible">
        <Title title={"Inicio de Sesión"} />

        <input
          className="controls"
          type="text"
          placeholder="Usuario"
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
        <input
          className="controls"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
        />

        {/* <Button Class={"buttons"} Text={"Iniciar sesión"}  /> */}
        <button className="buttons" onClick={registrarUsuario}>
          Iniciar sesión
        </button>

      </section>
      <Link to="/register">
        <Button Class={"buttons-two"} Text={"Registrarse"} />
      </Link>

    </div>
  );
}

export default Login;
