import React from "react";
import { useState } from "react";

export default function Login({onSubmit}){
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[error, setError]=useState(null)

    const handleSubmit = event =>{
        event.preventDefault()
        if(!username || !password){
            setError('Введите пароль и имя')
            return
        }
        setError(null)
        onSubmit({username,password})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <input placeholder='Ваше имя' value={username} onChange={event=>setUserName(event.target.value)}/>
            <input type='password' placeholder="Ваш пароль" value={password} onChange={event=>setPassword(event.target.value)}/>
            <button type="submit">Log in</button>
        </form>
    )
}