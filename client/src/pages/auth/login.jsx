import CommonForm from '@/components/common/form'
import { loginFormControls } from '@/config/index'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    email : "",
    password : ""
}
const AuthLogin = () => {
    const [formData, setFormData] = useState(initialState)
    const onSubmit = ()=>{

    }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
            <h1 className='text-3xl font-bolt tracking-tighter text-foreground'>Sign in to your account </h1>
            <p className='mt-2'>Don't have an account
                <Link to={"/auth/register"} className='font-medium ml-2 text-primary hover:underline'>Register</Link>
            </p>
        </div>
        <CommonForm
            formControls={loginFormControls}
            formData={formData}
            setFormData={setFormData}
            buttonText={"Sign Up"}
            onSubmit={onSubmit}
        />
    </div>
  )
}

export default AuthLogin