import LoginForm from '../components/LoginForm';
import styles from '../styles/Form.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
