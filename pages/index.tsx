import styles from '../styles/Home.module.css';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Bem-vindo à NewBlue</h1>
        <p>Nossa empresa é especializada no monitoramento marítimo, fornecendo soluções tecnológicas avançadas para garantir a segurança e eficiência das operações navais. Nosso objetivo é detectar e prevenir ameaças, utilizando sistemas de inteligência e predição para uma atuação preventiva. Além disso, estamos comprometidos com a sustentabilidade, focando na descarbonização do transporte marítimo e na gestão responsável dos espaços marítimos.</p>
      </div>
      <div className={styles.image}>
        <Image src="/ship.jpg" alt="Navio" width={400} height={300} />
      </div>
    </div>
  );
};

export default HomePage;
