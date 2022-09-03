import React from 'react'
import classes from './login.module.css'

function Login() {
    return (
        <div className={classes.majorCtn}>
            <div className={classes.formCtn}>
                <h3>Sehyog Admin Panel</h3>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="Password" />
                <button >Login</button>
            </div>
        </div>
    )
}

export default Login
 