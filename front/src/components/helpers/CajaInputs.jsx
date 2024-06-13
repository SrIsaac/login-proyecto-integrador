import Inputs from "./Inputs";
import { useContext, useEffect } from "react";
import CounterContext from "../../context/CounterContext";
function CajaInputs() {
    const {
        setNombre,
        setApellido,
        setUsuario,
        setCorreo,
        setContrasena,
    } = useContext(CounterContext);

    const dataInputs = [
        {
            type: "text",
            placeholder: "Nombre",
            handleOnChange: (e) => {
                setNombre(e.target.value);
            },
        },
        {
            type: "text",
            placeholder: "Apellido",
            handleOnChange: (e) => {
                setApellido(e.target.value);
            },
        },
        {
            type: "text",
            placeholder: "Usuruaio",
            handleOnChange: (e) => {
                setUsuario(e.target.value);
            },
        },
        {
            type: "email",
            placeholder: "Correo electronico",
            handleOnChange: (e) => {
                setCorreo(e.target.value);
            },
        },
        {
            type: "password",
            placeholder: "Contraseña",
            handleOnChange: (e) => {
                setContrasena(e.target.value);
            },
        },
    ];
    return (
        <>
            {dataInputs.map((input) => (
                <Inputs
                    type={input.type}
                    placeholder={input.placeholder}
                    handleOnChange={input.handleOnChange}
                />
            ))}
        </>
    );
}

export default CajaInputs;
