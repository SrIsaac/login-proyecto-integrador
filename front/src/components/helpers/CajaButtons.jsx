import { useContext } from "react";
import Button from "./Button"
import CounterContext from "../../context/CounterContext";

function CajaButtons (){
    const {
        registrarUsuario
      } = useContext(CounterContext);
    return(
        <Button handleOnclick={registrarUsuario} Class={"buttons"} Text={"Registrarse"} />
    )
}

export default CajaButtons