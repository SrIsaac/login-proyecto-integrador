import { useState, useEffect } from "react";
import CounterContext from "./CounterContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
let urlUsuario = "http://localhost:3000/user";

function StateCompo({ children }) {

    const [getNombre, setNombre] = useState("");
    const [getApellido, setApellido] = useState("");
    const [getUsuario, setUsuario] = useState("");
    const [getCorreo, setCorreo] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getEstadoUsuario, setEstadoUsuario] = useState([]);

    async function backUsers() {
        let resultado = await axios.get(urlUsuario);
        setEstadoUsuario(resultado.data);
    }

    useEffect(() => {
        backUsers();
    }, []);

    const redireccion = useNavigate();

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
        <CounterContext.Provider
            value={{
                setNombre,
                setApellido,
                setUsuario,
                setCorreo,
                setContrasena,
                registrarUsuario,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export default StateCompo;
