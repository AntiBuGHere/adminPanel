import React, { useState } from 'react'
import classes from './login.module.css'
import axios from 'axios'
import { API_URI } from '../../apiEndPoint'
import { useNavigate } from 'react-router'

function Login({setUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const HospitalLogin = (e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        } 
        console.log(data)
        axios.post(`${API_URI}/hospital/login`, data)
            .then(res=>{
                if(res.data){
                    setUser(res.data)
                }else{
                    alert('wrong credentials')
                }
                navigate('/')
            })
    }

    const DoctorLogin = (e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        } 
        console.log(data)
        axios.post(`${API_URI}/doctor/login`, data)
            .then(res=>{
                if(res.data){
                    setUser(res.data)
                }else{
                    alert('wrong credentials')
                }
                navigate('/')
            })
    }

    return (
        <div className={classes.majorCtn}>
            <div className={classes.formCtn}>
                <h3>Sehyog Admin Panel</h3>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={(e)=>{HospitalLogin(e)}} >Login as Hospital</button>
                ---------- or ----------
                <button onClick={(e)=>{DoctorLogin(e)}} >Login as Doctor</button>
            </div>
        </div>
    )
}

export default Login
 