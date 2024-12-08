import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
        <Button>Request an invite</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
