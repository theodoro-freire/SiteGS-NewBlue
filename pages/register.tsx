import RegisterForm from '../components/RegisterForm';
import styles from '../styles/Form.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1>Registrar</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;