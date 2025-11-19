import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="logo"
          style={styles.logo}
        />
        <h2 style={styles.title}>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.border = "2px solid #667eea")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.border = "2px solid #667eea")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.text}>
          Forgot password? <a href="#" style={styles.link}>Reset</a>
        </p>

        <p style={styles.text}>
          Don’t have an account? <a href="#" style={styles.link}>Sign Up</a>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    background: "#fff",
    padding: 40,
    borderRadius: 15,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    width: 350,
    textAlign: "center",
  },
  logo: {
    width: 60,
    marginBottom: 20,
  },
  title: {
    marginBottom: 30,
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 12,
    margin: "10px 0",
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
    transition: "border 0.3s",
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 10,
    fontSize: 16,
    transition: "background 0.3s",
  },
  text: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  link: {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
