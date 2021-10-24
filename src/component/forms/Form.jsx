import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"; //step 1
import Forms2 from './Forms2'
// ************************************
//yup is instead of validation 
//create new instance from yup calle validation scema // step 2 //
const validationSchema =  yup.object({
  name: yup.string().required('required'),
  email: yup.string().email('invalid email required').required('required'),
  password: yup.string().required('required'),
})

// ************************************************************
const Form = () => {
 
  const formik = useFormik({ //[جات حاجه اسمها Formic هتخلينى استغنى عن ال hook]
    //الهوك دا الى هو useformic هضطر اطور من الكود فهمنقل ع Form2
     initialValues : {
      name: "", 
      email: "",
      password:"",
     }, 
     onSubmit : values =>{

     },
     validationSchema
     //yup instead
     /*
     validate : values =>{
      let errors = {}   //step 1

      if(!values.name){   //step 3
    errors.name = "required"
      }
        // email pattern valid
        //^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      if (!values.email ) {
        errors.email = "required";
      }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
        errors.email = "format invalid";
      }
      
      if(!values.password){
        errors.password = "required";
      }
      return errors;   //step 2
     }*/
  }); 
  console.log("formik error",formik.errors);
  // console.log(formik.values); 
  // console.log(formik.values.name); 



  return (
    <>
    <form className="container" onSubmit = {formik.submitForm}>  
      {/* field */}
      <div className = "form_control"> 
      <label htmlFor="name" style={{ display: "block" }}> name </label> 
      <input
        type="text"
        id="name"
        name = "name"
        // onChange={formik.handleChange}
        // value={formik.values.name}
        // onBlur= {formik.handleBlur}
        //بدل ال 3 سطور دول yup اختصرتهم ف سطر واحد 
        {...formik.getFieldProps('name')}
      />
       <div className = "form_control"> 
      {formik.errors.name && formik.touched.name? <div className="error  text-danger">{formik.errors.name}</div>: null}
      </div>
      {/* field */}
      <label htmlFor="email" style={{ display: "block" }}> email </label>
      <input
        type="email"
        id="email"
        name = "email"
        // onChange={formik.handleChange}
        // value={formik.values.email}
        // onBlur= {formik.handleBlur}
        {...formik.getFieldProps('email')}
      />
     
       {formik.errors.email  && formik.touched.email ? <div className="error text-danger"> {formik.errors.email}</div>: null}
       </div>
      {/* field */}
      <div className = "form_control"> 
      <label htmlFor="password" style={{ display: "block" }}> password </label>
      <input
        type="password"
        id="password"
        name ="password"
        // onChange={formik.handleChange}
        // value={formik.values.password}
        // onBlur= {formik.handleBlur}
        {...formik.getFieldProps('password')}
        
      />
       {formik.errors.password  && formik.touched.password ? <div className="error  text-danger">{formik.errors.password}</div>: null}
       </div>
      <button type = "submit">submit</button>
    </form>
    <Forms2/>
    </>
  );
};

export default Form;
