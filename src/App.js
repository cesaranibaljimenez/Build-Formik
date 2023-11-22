import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: values =>{
      if(!values.email || !values.password){
        alert('Field required');
      } else if(!isValidEmail(values.email)){
        alert('Username should be an email');
      }else{
        alert('Login Successful');
      }
        
    },
      

    validate: values => {
     let errors = {};
     if(!values.email) errors.email = 'Field required'
     if(!values.password) errors.password = 'Field required'
     return errors;
    }
  });  

    const isValidEmail = (email, regex) => {
      return emailRegex.test(email);
    };

  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
      <div>Password</div>
      <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
      <button type="submit">Submit</button>  
      
      </form>

    </div>
  );
}

export default App;
