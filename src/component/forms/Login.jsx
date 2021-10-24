import React from 'react'
import * as yup from "yup";
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from "formik"; 
// *********************************
const initialValues = {
    name: "",
    email: "",
    password: "",
    comments:" ",
  };
  const onSubmit = values =>{};
  const validationSchema =  yup.object({
    name: yup.string().required('required'),
    email: yup.string().email('invalid email required').required('required'),
    password: yup.string().required('required'),
  })

const Login = () => {
    return (
        <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      <div className="container pt-5">
        <Form className="container">
     <div className="form_control">
            <label htmlFor="email" style={{ display: "block" }}> email </label>
            <Field  type="email"id="email" name="email"/>
  <ErrorMessage name="email" component = 'div'/>
           
          </div>

          <div className="form_control">
          <label htmlFor="password" style={{ display: "block" }}> password </label>
            <Field
              type="password" id="password"  name="password" />
             <ErrorMessage name="password"  component = 'div'/>
          </div>

          <label htmlFor="rememberMe" style={{ display: "block" }}>
          remember me
        </label>
        <input type="checkbox" id="rememberMe" />

         <br/> <button type="submit" className = "btn btn-primary">submit</button>
        </Form>
      </div>
    </Formik>
    )
}

export default Login
