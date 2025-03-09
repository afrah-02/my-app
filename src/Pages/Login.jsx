import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://backend-avth.onrender.com/login", {
                email,
                password
            });

            localStorage.setItem("userID", response.data.userID);
            localStorage.setItem("username", response.data.username);
            setIsLoggedIn(true);
            navigate("/home");
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;