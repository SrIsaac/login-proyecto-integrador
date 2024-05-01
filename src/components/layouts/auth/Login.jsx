import Button from "../../helpers/Button";
import Inputs from "../../helpers/Inputs";
import Title from "../../helpers/Title";

function Login() {
  return (
    <div className="container">
      <section id="login" className="form-login visible">
        <Title title={"Inicio de Sesión"} />

        <Inputs Type={"text"} Placeholder={"Usuario"} />
        <Inputs Type={"password"} Placeholder={"Contraseña"} />
        
        <Button Class={"buttons"} Text={"Iniciar sesión"}  />
    
      </section>
        <Button Class={"buttons-two"} Text={"Registro"}  />
  
    </div>
  );
}

export default Login;
