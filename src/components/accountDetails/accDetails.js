import React from 'react'
import classes from './accDetails.module.css'

function AccDetails() {
    return (
        <div className={classes.majorCtn}>
            <div className={classes.card}>
                <h5>Hospital Name: Apollo</h5>
                <p style={{fontSize:16}}>Specialization: Neuro Surgery</p>
                <p style={{fontSize:15}}><b>Bed Types</b></p>
                <p style={{fontSize:14}}>Ventilator</p>
                <p style={{fontSize:14}}>ICU</p>
                <p style={{fontSize:14}}>EF room</p>
                <p style={{fontSize:14}}>Bed Types</p>
            </div>
        </div>
    )
}

export default AccDetails
