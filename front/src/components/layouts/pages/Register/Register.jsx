import Button from "../../../helpers/Button";
import Title from "../../../helpers/Title";
import { Link } from "react-router-dom";
import "./Register.css";
import StateCompo from "../../../../context/StateCompo";
import CajaInputs from "../../../helpers/CajaInputs";
import CajaButtons from "../../../helpers/CajaButtons";
let urlUsuario = "http://localhost:3000/user";

function Register() {
  return (
    <div className="container">

      <StateCompo>
        <section id="login" className="form-login visible">
          <Title title={"Registro"} />

          <CajaInputs />

          <CajaButtons/>
          
        </section>
        <Link to="/">
          <Button Class={"buttons-two"} Text={"Volver"} />
        </Link>
      </StateCompo>
    </div>
  );
}

export default Register;
