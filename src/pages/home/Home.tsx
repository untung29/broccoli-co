import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.content}>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
      </div>
    </>
  );
};

export default Home;
