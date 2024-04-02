
'use client'
import React, { useState } from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import * as Yub from "yup"
import { BaseUrl } from '@/app/libs/constants'
import style from "./style.module.css"

export default function Login() {
  const [loading,setLoading] = useState(false)
  type initailValue  = {
    email : string;
    password1 : string;
    password2 : string;
    first_name : string;
    last_name : string;
  }

  const initialValues : initailValue = {
    email : "",
    password1 : "",
    password2 : "",
    first_name : "",
    last_name : "",
  }

  const handleSubmit = (value : initailValues) => {
    setLoading(true)
    fetch(BaseUrl,{
      method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(value)
    }).
    then(res => res.json()).
    then((data) => console.log(data)).catch((error)=> {
      console.log(error);
      setLoading(false);
    })

    setLoading(false);
  }

  if (loading) {
		return (
			<div className={`${style.container}`}>
				<h1 className="text-6xl text-center">Loading...</h1>
			</div>
		);
	}



  return (
    <main className='h-screen bg-green-400 grid place-content-center text-2xl'>
      <Formik
      
        // 1. initailValue
      initialValues={initialValues}
     // 2. validationShcema
     validationSchema={
      Yub.object().shape({
        email : Yub.string().email("Invalid Email ").required("Required"),
        password1 : Yub.string().min(8,"Password must be 8 character").required("Required"),
        password2 : Yub.string().oneOf([Yub.ref("password1")],"Password must match").required("Required"),
        first_name : Yub.string().required("Required"),
        last_name : Yub.string().required("Required")
      })
     }
          // 3. onSubmit  
    onSubmit={
      (values,action)=>{
        ()=>{handleSubmit(values)}
      }
    }
     



      
      >

        <Form className='w-96 bg-white'>

        </Form>

      </Formik>
    </main>
  )
}
