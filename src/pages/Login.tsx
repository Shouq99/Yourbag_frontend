import { LoginUser, registerUser } from "@/tookit/slices/userSlice";
import { AppDispatch } from "@/tookit/store";
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type LoginFormData = {
  email: string
  password: string
}
    export const Login = () => {
        const navigate = useNavigate()
        const dispatch: AppDispatch = useDispatch()
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<LoginFormData>()
      
      //  console.log(data)
    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
      try{
        const response = await dispatch(LoginUser(data))
    //    console.log("Response from Register: " + response)
        toast.success(response.payload.message)
      }catch (error: any){
        toast.error(error.message || "Registeration failed")

      }
        }
      
        return (
          <div className="LogIn">
          <h2>User LogIn</h2>
          <form onSubmit={handleSubmit (onSubmit)}>
       
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

       
    
     <button type="submit">Login</button>
        </form>
        </div>
    )
      }
  
