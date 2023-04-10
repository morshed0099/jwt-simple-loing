import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { auth } from '../AuthProvider/AuthProvider';

const Singup = () => {
    const { setUser}=useContext(auth)
    const handelLogin=(e)=>{
        e.preventDefault();
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        const user={
            email,
            password
        }          
        fetch('http://localhost:5000/login',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.message){               
                toast.error(data.message)
            }else{          
                localStorage.setItem("token",data.token)
                setUser(data.user);
            }
        })
    }
    return (
        <div>
            <form onSubmit={(e) => handelLogin(e)}>
                <input name='email' type="email" placeholder='enter your eamil' />
                <input name='password' type="password" placeholder='enter your password' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Singup;