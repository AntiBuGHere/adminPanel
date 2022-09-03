import React, {useState} from 'react'
import classes from './dashboard.module.css'
import { FaBookMedical } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { AiOutlineFileDone } from 'react-icons/ai'
import AccDetails from '../accountDetails/accDetails'
import Register from '../Register/register'
import Accepted from '../accepted/accepted'

function Dashboard({user}) {
    console.log(user)
    const [name, setName] = useState(user.name)
    const [miniNav, setMiniNav] = useState('request')
    return (
        <div className={classes.majorCtn}>
            <div className={classes.header}>
                <h3>{name} Sehyog Dashboard</h3>
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
                <Register user={user} setMiniNav={setMiniNav}/>
            }
            {
                miniNav &&
                miniNav === 'confirmed' &&
                <Accepted user={user} setMiniNav={setMiniNav}/>
            }
            {
                miniNav &&
                miniNav === 'account' &&
                <AccDetails user={user} setMiniNav={setMiniNav}/>
            }

        </div>
    )
}

export default Dashboard
