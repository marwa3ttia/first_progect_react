import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from './TextField';

const Register = () => {
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
    })
    return (
        <div className = "container">
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
        }}>
        {formik => (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Register</h1>
            <Form>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField label="Confirm Password" name="confirmPassword" type="password" />
              <TextField label="your comment" as='textarea'  id="comments"  name="comments" />
              <select>
              <option value="male">male</option>
              <option value="female">femail</option>
              </select> <br/>
              <button className="btn btn-dark mt-3" type="submit">submit</button>
            </Form>
          </div>
        )}
      </Formik>
      </div>
    )
}

export default Register
