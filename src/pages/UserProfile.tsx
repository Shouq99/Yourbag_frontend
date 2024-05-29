import { UserSidebar } from "@/components/UserSidebar";
import { useUserState } from "@/components/hooks/useUserState";
import { updateUser } from "@/tookit/slices/userSlice";
import { AppDispatch } from "@/tookit/store";
import { UpdateProfileFormData } from "@/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const UserProfile = () => {
    const {userData} = useUserState();
    const dispatch: AppDispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UpdateProfileFormData>()
 
      const [isFromOpen,setIsFromOpen] = useState(false);
      const onSubmit: SubmitHandler<UpdateProfileFormData> = async (data) => {
   if(!userData?.userId){
    toast.error("user data is not available")
    return
   }
        try{
      const response = await dispatch(updateUser({updateUserData : data, userId: userData?.userId}))
      console.log(response);

    }catch (error){
        console.log(error);
    }
        }
    return (
        <div>
        <UserSidebar/>
        <div className="cart-card">
       {userData && (
        <>
        <h3> Name: {userData.fullName}</h3>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <button className="product-btn"
        onClick={() => {
            setIsFromOpen(!isFromOpen)
        }}>
            {isFromOpen ? "Close Edit User Info" : " Edit User Info"}
             </button>
        {/* <p>createdAt:{userData.createdAt}</p> */}
       {isFromOpen &&(
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
            <button type="submit" className="product-btn">Update Profile</button>
    
            </form>
        )
       }
      

        </>
       )}
             </div>
             </div>
    )
}