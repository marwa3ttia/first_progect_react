import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"; //step 1
// *******************************************************************
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
  
const Forms2 = () => {
  return (
    //step 2 rap el html be Formic
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      <div className="container pt-5">
        <Form className="container">
          <div className="form_control">
          <label htmlFor="name" style={{ display: "block" }}> name </label> 
            <Field type="text" id="name" name="name"  
            />
  <ErrorMessage name="name"  component = 'div'/>
  </div>

            <div className="form_control">
            <label htmlFor="email" style={{ display: "block" }}> email </label>
            <Field  type="email"id="email" name="email"/>
  <ErrorMessage name="email" component = 'div'/>
           
          </div>

          <div className="form_control">
          <label htmlFor="password" style={{ display: "block" }}> password </label>
            <Field
              type="password" id="password"  name="password" />
             <ErrorMessage name="password"/>
          </div>


          <div className="form_control">
          <label htmlFor="comments" style={{ display: "block" }}> comments </label>
          {/* as= component */}
            <Field as='textarea'  id="comments"  name="comments" />
             <ErrorMessage name="comments"  component = 'div'/>
          </div>

          <button type="submit">submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default Forms2;
