import React, { useEffect, useState } from 'react'
import classes from './accepted.module.css'
import axios from 'axios'
import { API_URI } from '../../apiEndPoint'

function Accepted({user}) {
    const [requests, setRequests] = useState(null)
    useEffect(()=>{
        axios.get(`${API_URI}/booking/confirmed/${user._id}`)
            .then(res=>{
                console.log(res.data.data)
                setRequests(res.data.data)
            })
    },[])
    return (
        <div className={classes.majorCtn}>
            {
                requests ?
                requests.map((r,i)=>
                    <div className={classes.card} key={i}>
                        <h5>Bed Type: {r.bedType}</h5>
                        <p style={{fontSize:14}}>Patient: {r.patientName}</p>
                        <p style={{fontSize:12}}>Message: Operation</p>
                        <p style={{fontSize:12}}>Duration: {r.duration}</p>
                        <div>
                            <button>Done</button>
                        </div>
                    </div> 
                    ) :
                    "No Requests"
            }
        </div>
    )
}

export default Accepted
