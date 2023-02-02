import React from "react";
import { useState } from "react";

export default function Registration({onSubmit}){
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword, setConfirmPassword]=useState('')
    const[error,setError]=useState(null)

    const handleSubmit = event =>{
        event.preventDefault()
        if(!username || !email || !password || !confirmPassword){
            setError('Вы заполнили не все поля')
            return
        }
        if(password!== confirmPassword){
            setError('Пароль не совпал')
            return
        }
        setError(null)
        onSubmit({ username, email, password})
    }
    return(
        <form>
            <h1>Registration</h1>
            {error &&<p>{error}</p>}
            <input placeholder="Введите ваше имя" value={username} onChange={event => setUserName(event.target.value)}></input>
            <input type='email' placeholder="Ваш Email" value={email} onChange={event => setEmail(event.target.value)}></input>
            <input type='password' placeholder="Придумайте пароль" value={password} onChange={event => setPassword(event.target.value)}></input>
            <input type='password' placeholder="Подтвердите пароль" value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)}></input>
            <button type="submit">Registration</button>
        </form>
    )
}