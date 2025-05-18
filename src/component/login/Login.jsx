import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./logincss.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const loginButtonRef = useRef(null); // ✅ Ref for animation

  const handleLogin = async () => {
    try {
      const res = await fetch("https://coupon-backend-32op.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        toast.success("Login successful!");
        navigate("/landing");
      } else {
        toast.warn(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  // ✅ Animation trigger on Enter press
  const triggerLoginFeedback = () => {
    if (loginButtonRef.current) {
      loginButtonRef.current.classList.add("active-press");
      setTimeout(() => {
        loginButtonRef.current.classList.remove("active-press");
      }, 200);
    }
  };

  const handleKeyDownEmail = (e) => {
    if (e.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  const handleKeyDownPassword = (e) => {
    if (e.key === "Enter") {
      triggerLoginFeedback(); // ✅ Animate the button
      handleLogin();
    }
  };

  return (
    <div className="login-main">
      <div className="login-image" />
      <div className="login-form">
        <h1 className="h13">LOGIN</h1>

        <input
          className="login-name"
          type="email"
          placeholder="Enter E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDownEmail}
        />

        <input
          className="login-name"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          ref={passwordRef}
          onKeyDown={handleKeyDownPassword}
        />

        <button
          className="login-submit"
          onClick={handleLogin}
          ref={loginButtonRef} // ✅ ref attached
        >
          Login
        </button>

        <p
          className="signup-link"
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer", marginTop: "1rem", color: "#007bff" }}
        >
          New user? <strong>Signup</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;
