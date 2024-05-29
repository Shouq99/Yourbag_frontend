import { registerUser } from "@/tookit/slices/userSlice";
import { AppDispatch } from "@/tookit/store";
import { RegisterFormData } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    export const Register = () => {
      const navigate = useNavigate()
        const dispatch: AppDispatch = useDispatch()
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<RegisterFormData>()
      
      //  console.log(data)
    const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
      try{
        const response = await dispatch(registerUser(data))
    //    console.log("Response from Register: " + response)
        toast.success(response.payload.message)
      }catch (error: any){
        toast.error(error.message || "Registeration failed")

      }
        }
      
        return (
          <div className="register">
          <img src="https://i.im.ge/2024/05/29/KIuTg6.logo-B.png" className="logo-img"/>
          <h1>Regiter</h1>
          <form onSubmit={handleSubmit (onSubmit)}>
        <div className="form-field">
        <label htmlFor="name"> Name: </label>

          <input
        type="text"
        {... register ("fullName", {
          required: "Name is required",
        minLength: {value: 2, message: "Name must be at least 2 characters"}})}/>
        {errors.fullName && <p>{errors.fullName?.message}</p>}
        </div>
        
        <div className="form-field">
        <label htmlFor="name"> password: </label>

          <input
        type="password" 
        
        {...register("password", {
          required: "Password Required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/,
            message:
              "Password is  letter, number, and special character"
          },
          maxLength: { value: 20, message: "Password should not exceed 20 characters" }
        })}
      />
        {errors.password && <p>{errors.password?.message}</p>}
        </div>

        <div className="form-field">
        <label htmlFor="name"> email: </label>

          <input
        type="email"
        {... register ("email", {
          required: "email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
       })}/>
        {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className="form-field">
        <label htmlFor="name"> phone: </label>

          <input
        type="phone"
        {... register ("phone", {
          required: "phone is required",
          pattern: {
            value: /^0\d{9}$/,
            message: "Invalid phone"
          }
       })}/>
        {errors.phone && <p>{errors.phone?.message}</p>}
        </div>
     <button type="submit" className="product-btn">Register</button>
        </form>
        </div>
    )
      }
  
