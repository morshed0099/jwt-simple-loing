import React from 'react';
import { toast } from 'react-hot-toast';


const Login = () => {

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
          
        fetch('http://localhost:5000/user',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.acknowledged){
                toast.success('data inseret successfully !')
                form.reset();
            }else{
                toast.error(data.message)
            }
        })
    }


    return (
        <div>
            <form onSubmit={(e)=>handelLogin(e)}>
                <input name='email' type="email" placeholder='enter your eamil' />
                <input name='password' type="password" placeholder='enter your password' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;