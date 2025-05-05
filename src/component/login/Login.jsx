import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logincss.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

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
        localStorage.setItem("token", data.token);          // Save token
        localStorage.setItem("userEmail", email);           // Save email directly from user input
        // alert("Login successful!");
        navigate("/landing");                               // Navigate to landing or profile page
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
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
        />

        <input
          className="login-name"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="login-submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
