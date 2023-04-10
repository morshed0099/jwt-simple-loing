import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { email,setUser} = useContext(auth)
    const handelLogOut = () => { 
       setUser(null);
    localStorage.removeItem('token');       
    }
    return (
        <div>
            {
                email ? <button onClick={handelLogOut}>logout</button> : <NavLink to='/login'>Login</NavLink>
            }
            <NavLink to='/signup'>Signup</NavLink>
            <h1>user:{email}</h1>
        </div>
    );
};

export default Header;