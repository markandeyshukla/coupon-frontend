import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signupcss.css';
import './logmg1.jpg';
import './beck.jpg';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                navigate('/login'); // ✅ Redirect after signup
            } else {
                alert(data.message || 'Signup failed');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong!');
        }
    };

    return (
        <div className='div12'>
            <div className='div22'></div>
            <div className='loginsize2'>
                <h1 className='h12'>SIGN UP</h1>
                
                    <input className='loginbut2'
                     type="email" 
                     placeholder='Enter E-Mail' 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} 
                     />
                
                    <input className='loginbut2' 
                    type="password" 
                    placeholder='Enter Password'
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} 
                     />
                
                    <input className='loginbut2' 
                    type="password" 
                    placeholder='Enter Password Again' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                
                <button className='logbut2' onClick={handleSignup}>
                    Signup
                    </button>
            </div>
        </div>
    );
}

export default Signup;
