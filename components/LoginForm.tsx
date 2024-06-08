import { useState } from 'react';
import styles from '../styles/Form.module.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}> 
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Senha:</label>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
