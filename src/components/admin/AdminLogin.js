import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ADMIN_PASSWORD = "saya atha"; // Ganti sesuai keinginan



function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      onLogin();
    }
  }, [onLogin]);

  function handleSubmit(e) {
    e.preventDefault();
    if (password.trim() === "") {
      setError("Password wajib diisi!");
      return;
    }
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      onLogin();
    } else {
      setError("Password salah!");
    }
  }

  return (
    <div style={{ maxWidth: 340, margin: "80px auto", padding: 32, boxShadow: "0 2px 16px #0002", borderRadius: 12, background: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password admin"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(""); }}
          style={{ width: "100%", padding: 10, marginBottom: 16, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 6, background: "#6366f1", color: "#fff", border: 0, fontWeight: 600 }}>Login</button>
        {error && <div style={{ color: "#e11d48", marginTop: 12, textAlign: "center" }}>{error}</div>}
      </form>
    </div>
  );
}

AdminLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AdminLogin;
