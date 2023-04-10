import React, { createContext, useEffect, useState } from 'react';

export const auth = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')    
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            return console.log('token is empty')
        } else {
            fetch('http://localhost:5000/me', {
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json()).then(data => {
                setUser(data);
            })
        }
    }, [token])

    const userInfo = {
        email: user?.email,
        setUser,
    }
    return (
        <div>
            <auth.Provider value={userInfo}>
                {children}
            </auth.Provider>
        </div>
    );
};

export default AuthProvider;