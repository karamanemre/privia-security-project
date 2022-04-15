import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../components/Logo";
import Input from "../components/Input";

function Login() {
  let initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Kullanıcı adı zorunlu alan"),
    password: Yup.string().required("Password zorunlu alan"),
  });
  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      alert(`Username: ${values.username}\nPassword: ${values.password}`)
    },
  });

  return (
    <div className="login-page">
      <div className="d-flex justify-content-left p-5">
        <Logo src={"./img/Privia_logo_white.png"} width={"150px"} height={"150px"} />
      </div>
      <div className="content ">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <Input
              name={"username"}
              label={"Kullanıcı Adı"}
              error={errors.username}
              id={"username"}
              handleChange={handleChange}
              value={values.username}
              inputType={"text"}
            />
            <Input
              name={"password"}
              label={"Şifre"}
              error={errors.password}
              id={"password"}
              handleChange={handleChange}
              value={values.password}
              inputType={"password"}
            />
            <div className="d-flex justify-content-left">
              <button type="submit" className="btn btn-outline-light">
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
