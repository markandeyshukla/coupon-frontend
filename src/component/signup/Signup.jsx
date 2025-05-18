import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './signupcss.css';
import './logmg1.jpg';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const buttonRef = useRef(null); // ✅ For button animation

    const triggerSignupFeedback = () => {
        if (buttonRef.current) {
            buttonRef.current.classList.add("active-press");
            setTimeout(() => {
                buttonRef.current.classList.remove("active-press");
            }, 200);
        }
    };

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            toast.warn("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('https://coupon-backend-32op.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                navigate('/login');
            } else {
                toast.warn(data.message || 'Signup failed');
            }
        } catch (err) {
            console.error(err);
            toast.error('Something went wrong!');
        }
    };

    // ✅ Handle Enter for each field
    const handleEmailKeyDown = (e) => {
        if (e.key === "Enter") passwordRef.current.focus();
    };

    const handlePasswordKeyDown = (e) => {
        if (e.key === "Enter") confirmRef.current.focus();
    };

    const handleConfirmKeyDown = (e) => {
        if (e.key === "Enter") {
            triggerSignupFeedback(); // ✅ Animation
            handleSignup();
        }
    };

    return (
        <div className='signup-main'>
            <div className='signup-image'></div>
            <div className='signup-form'>
                <h1 className='h1'>SIGN UP</h1>

                <input
                    className='signup-name'
                    type="email"
                    placeholder='Enter E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleEmailKeyDown}
                />

                <input
                    className='signup-name'
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    onKeyDown={handlePasswordKeyDown}
                />

                <input
                    className='signup-name'
                    type="password"
                    placeholder='Enter Password Again'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ref={confirmRef}
                    onKeyDown={handleConfirmKeyDown}
                />

                <button
                    className='signup-submit'
                    onClick={handleSignup}
                    ref={buttonRef} // ✅ ref added for animation
                >
                    Signup
                </button>

                <p
                    className="login-link"
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer", marginTop: "1rem", color: "#007bff", textAlign: "center" }}
                >
                    Already have an account? <strong>Login</strong>
                </p>
            </div>
        </div>
    );
}

export default Signup;
