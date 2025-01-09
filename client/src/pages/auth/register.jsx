import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config/index";
import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(formData);
  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const resultAction = await dispatch(registerUser(formData));
      if (registerUser.fulfilled.match(resultAction)) {
        console.log("Registration successful:", resultAction.payload);
        navigate("/auth/login");
      } else if (registerUser.rejected.match(resultAction)) {
        console.error("Registration failed:", resultAction.payload || resultAction.error.message);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };
  

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bolt tracking-tighter text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">
          Already have a Account
          <Link
            to={"/auth/login"}
            className="font-medium ml-2 text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign Up"}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
