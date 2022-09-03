import React from 'react'
import classes from './accDetails.module.css'

function AccDetails({user}) {
    console.log(user)
    return (
        <div className={classes.majorCtn}>
            <div className={classes.card}>
                <h5>Hospital Name: {user.name}</h5>
                <p style={{fontSize:16}}>Email: {user.email}</p>
                {
                    user.desc &&
                        <p style={{fontSize:16}}>Description: {user.desc}</p>
                }
                {
                    user.specialization &&
                        <p style={{fontSize:16}}>Specialization: {user.specialization}</p>
                }
                {
                    user.bed &&
                    <p style={{fontSize:15}}><b>Bed Types available</b></p>

                }
                {
                    user.bed &&
                    user.bed.map(b=>
                        <p style={{fontSize:14}}>{b.type}</p>
                        )
                }
            </div>
        </div>
    )
}

export default AccDetails
