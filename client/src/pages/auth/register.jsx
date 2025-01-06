import React from 'react'
import { Link } from 'react-router-dom'

const AuthRegister = () => {
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
            <h1 className='text-3xl font-bolt tracking-tighter text-foreground'>Create New Account</h1>
            <p className='mt-2'>Already have a Account
                <Link to={"/auth/login"} className='font-medium text-primary hover:underline'>Login</Link>
            </p>
        </div>
    </div>
  )
}

export default AuthRegister