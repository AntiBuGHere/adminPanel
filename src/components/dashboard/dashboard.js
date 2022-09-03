import React, {useState} from 'react'
import classes from './dashboard.module.css'
import { FaBookMedical } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import AccDetails from '../accountDetails/accDetails'
import Register from '../Register/register'

function Dashboard() {
    const [miniNav, setMiniNav] = useState('register')
    return (
        <div className={classes.majorCtn}>
            <div className={classes.header}>
                <h3>Sehyog Dashboard</h3>
                <button>Logout</button>
            </div>
            <div className={classes.nav}>
                <FaBookMedical onClick={()=>setMiniNav('register')}/>
                <MdAccountCircle onClick={()=>setMiniNav('account')}/>
            </div>
            {
                miniNav &&
                miniNav == 'register' ?
                <Register /> :
                <AccDetails />
            }

        </div>
    )
}

export default Dashboard
