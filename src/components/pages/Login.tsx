import { Button, Container, Form } from "react-bootstrap";
import {
  AuthDataWithToken,
  UserI,
  authUser,
} from "./../customHooks/authController";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState<UserI>({
    user: "",
    password: "",
  });
  const [errors, setErrors] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [validated, setValidated] = useState<boolean>(false);
  const [successLogin, setSuccessLogin] = useState<boolean>(false);
  const navigate= useNavigate();

  if (errors) {
    setTimeout(() => {
      setErrors("");
    }, 4000);
  }

  if (successLogin) {
    setTimeout(() => {
      navigate("/")
    }, 4000);
  }

  const loginUser = async () => {
    setLoading(true);
    try {
      const login: AuthDataWithToken = await authUser(
        userData
      );
      console.log(login)
      if (login.success) {
        const token= login.token || '';
        localStorage.setItem("token", token);
      }
      setLoading(false);
      setSuccessLogin(true);
    } catch (error) {
      setErrors("Error al validar los datos ingresados");
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setErrors("Todos los campos son obligatorios");
      setValidated(false);
    } else {
      setValidated(true);
      loginUser();
    }
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setUserData({ ...userData, user: inputData });
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setUserData({ ...userData, password: inputData });
  };
  return (
    <Container id="Login">
      {!successLogin ? 
        <div className="login-content bg-magenDark mb-4 mx-auto border border-cyan text-magenLight text-uppercase text-center px-3 pb-5 position-relative">
          {loading ? (
            <div className="loadingSection w-100 mt-4">
              <div className="loader"></div>
            </div>
          ) : (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <legend className="mb-4 text-cyanLight">Identificarme</legend>
              <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={handleInputUsername}
                  name="username"
                  placeholder="Ingresa tu usuario"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu usuario.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={handleInputPassword}
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu contraseña.
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                className="px-5 bg-magenDark text-cyanLight rounded-0 text-uppercase mt-3"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          )}
          {errors && (
            <div className="errors-login position-absolute py-1">{errors}</div>
          )}
        </div>
      :
      <div className="text-success my-5 fs-1 text-center p-5 success-add">
      Te has identificado. Pronto serás redireccionado.
    </div>
      }
    </Container>
  );
}

export default Login;
