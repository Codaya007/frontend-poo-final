import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/button.component";
import Container from "../components/container/container.component";
import FormInput from "../components/inputs/input.component";
import { login } from "../data/actions";
import Loader from "../components/loader/Loader";
const initialState = {
  email: "",
  password: "",
};

const validateData = (data) => {
  const { email, password } = data;
  const errors = {};

  if (!email) {
    errors.email = "Email requerido";
  }

  if (!password) {
    errors.password = "Contraseña requerida";
  }

  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { email, password } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };

    setData(newData);
    setErrors(validateData(newData));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isAuth && user) {
    const { role } = user;

    if (role === 0) return <Navigate to="/" />;
    if (role === 1) return <Navigate to="/dashboard/admin" />;
  }

  return (
    <Container>
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register-form-title">Login</h2>
        <FormInput
          title="Email"
          placeholder="alguien@example.com"
          name="email"
          value={email}
          handleChange={handleChange}
          type="email"
        />
        {errors.email && <span>{errors.email}</span>}
        <FormInput
          title="Password"
          placeholder="*********"
          name="password"
          value={password}
          handleChange={handleChange}
          type="password"
        />
        {errors.password && <span>{errors.password}</span>}
        {isLoading && <Loader />}
        {!isLoading && (
          <Button
            title="Ingresar"
            moreStyle="bg-primary text-white w-full mb-3"
            type="submit"
          />
        )}

        <div>
          <Button
            isButton={false}
            title="Aún no tienes una cuenta? Registrar"
            href="/register"
            moreStyle="text-gray-600"
          />
        </div>
      </form>
    </Container>
  );
};

export default Login;
