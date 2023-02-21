import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { StyleCard, StyleCardForm, StyleCardInputName, StyleCardInputPassword, StyleCardSubmitBtn, StyleLoginTitle } from './Login.style'
import { saveToken } from '../../redux/TokenAction';
import { useForm } from "react-hook-form";

export const Login = () => {
    const navgate = useNavigate()
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode:"all"
    });

const handlerSend = (data) =>{
    axios.post("https://matras-store.onrender.com/admin/login",{
        "userName": data.userName,
        "password": data.password,
    }).then(data => {
        console.log(data);
        if(data.status === 200){
            navgate("/order")
            dispatch(saveToken(data.data.token, localStorage.setItem("token", data.data.token)))
        }
    })
    .catch(err => console.log(err))
}
    return (
        <div className=' position-absolute top-50 start-50 translate-middle'>
            <StyleCard>
                <StyleLoginTitle>Kirish</StyleLoginTitle>
                <StyleCardForm onSubmit={handleSubmit(handlerSend)}>
                    <StyleCardInputName {...register("userName", { required: true })} type="text" name='userName' placeholder='Login' required/>
                    <StyleCardInputPassword {...register("password", { required: true })} type="password" name='password' placeholder='Parol' required/>
                    <StyleCardSubmitBtn disabled={!isValid} type='submit'>Kirish</StyleCardSubmitBtn>
                </StyleCardForm>
            </StyleCard>
        </div>
        )
    }
    