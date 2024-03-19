function Login() {
  return (
    <div className="container">
      <section id="login" className="form-login visible">
        <h5>Inicio de sesión</h5>
        <h4 id="mensaje"></h4>
        <input
          className="controls"
          type="text"
          placeholder="Usuario"
          id="usuario"
          name="usuario"
        />
        <input
          className="controls"
          type="password"
          placeholder="Contraseña"
          id="contrasena"
          name="contrasena"
        />
        <button
          id="btnIniciar"
          className="buttons"
          type="button"
          value="Ingresar"
        >Inciar sesión</button>
      </section>
        <button
          id="btnregis"
          className="buttons-two"
          type="button"
          value="Registrate"
        >Registro</button>
    </div>
  );
}

export default Login;
