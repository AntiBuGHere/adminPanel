import React from 'react'
import classes from './accepted.module.css'

function Accepted() {
    return (
        <div className={classes.majorCtn}>
            <div className={classes.card}>
                <h5>Bed Type: Ventilator</h5>
                <p style={{fontSize:14}}>Patient: Sam</p>
                <p style={{fontSize:12}}>Message: lorem ipsum</p>
                <p style={{fontSize:12}}>Duration: 20/10/2022 - 25/10/2022</p>
                <div>
                    <button>Accept</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Bed Type: Ventilator</h5>
                <p style={{fontSize:14}}>Patient: Sam</p>
                <p style={{fontSize:12}}>Message: lorem ipsum</p>
                <p style={{fontSize:12}}>Duration: 20/10/2022 - 25/10/2022</p>
                <div>
                    <button>Accept</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Accepted
