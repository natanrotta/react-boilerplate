import React, { useState } from "react";

import { Button, InputText } from "../../components";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("authToken", "tokenExample"); // Exemplo de login
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login</h2>
      <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <InputText value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
};

export default LoginPage;
