import Button from "../../../helpers/Button";
import Inputs from "../../../helpers/Inputs";
import Title from "../../../helpers/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
let urlUsuario = "http://localhost:3000/user";

function Register() {
  const [getNombre, setNombre] = useState("");
  const [getApellido, setApellido] = useState("");
  const [getUsuario, setUsuario] = useState("");
  const [getCorreo, setCorreo] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getEstadoUsuario, setEstadoUsuario] = useState([]);
  const redireccion = useNavigate();

  async function backUsers() {
    let resultado = await axios.get(urlUsuario);
    setEstadoUsuario(resultado.data);
  }

  backUsers();

  function buscarUser() {
    return getEstadoUsuario.some((data) => data.nombre === getNombre);
  }

  function registrarUsuario() {
    if (buscarUser()) {
      alert("El nombre de usuario ya existe");
    } else {
      capturarUsuario();
      redireccion("/");
    }
  }

  async function capturarUsuario() {
    let user = {
      nombre: getNombre,
      apellido: getApellido,
      usuario: getUsuario,
      correo: getCorreo,
      contrasena: getContrasena,
    };
    await axios.post(urlUsuario, user);
  }

  return (
    <div className="container">
      <section id="login" className="form-login visible">
        <Title title={"Registro"} />

        <input
          className="controls"
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <input
          className="controls"
          type="text"
          placeholder="Apellidos"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />
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
          type="email"
          placeholder="Correo Electronico"
          onChange={(e) => {
            setCorreo(e.target.value);
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

        <button className="buttons" onClick={registrarUsuario}>
          Registrarse
        </button>
        {/* <Button Class={"buttons"} Text={"Registrarse"}  /> */}
      </section>
      <Link to="/">
        <Button Class={"buttons-two"} Text={"Volver"} />
      </Link>
    </div>
  );
}

export default Register;
