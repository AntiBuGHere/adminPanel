import React from 'react'

function Signup() {
    const [type, setType] = useState('doc')
    return (
        <div className={classes.majorCtn}>
            <div className={classes.formCtn}>
                <h3>Sehyog Admin Panel</h3>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="name" />
                <select>
                    <option>
                        hospital
                    </option>
                    <option>
                        doctors
                    </option>
                </select>

                <input type="password" placeholder="Password" />
                <button >Login</button>
            </div>
        </div>
    )
}

export default Signup
