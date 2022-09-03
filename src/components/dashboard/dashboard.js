import React, {useState} from 'react'
import classes from './dashboard.module.css'
import { FaBookMedical } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { AiOutlineFileDone } from 'react-icons/ai'
import AccDetails from '../accountDetails/accDetails'
import Register from '../Register/register'
import Accepted from '../accepted/accepted'

function Dashboard() {
    const [miniNav, setMiniNav] = useState('request')
    return (
        <div className={classes.majorCtn}>
            <div className={classes.header}>
                <h3>Sehyog Dashboard</h3>
                <button>Logout</button>
            </div>
            <div className={classes.nav}>
                <FaBookMedical onClick={()=>setMiniNav('request')}/>
                <AiOutlineFileDone onClick={()=>setMiniNav('confirmed')}/>
                <MdAccountCircle onClick={()=>setMiniNav('account')}/>
            </div>
            {
                miniNav &&
                miniNav === 'request' &&
                <Register />
            }
            {
                miniNav &&
                miniNav === 'confirmed' &&
                <Accepted />
            }
            {
                miniNav &&
                miniNav === 'account' &&
                <AccDetails />
            }

        </div>
    )
}

export default Dashboard
