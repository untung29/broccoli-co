import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <div>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
