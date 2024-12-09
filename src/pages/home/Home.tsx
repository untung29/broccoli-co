import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { useDisclosure } from "@mantine/hooks";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";

const Home = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
        <Button onClick={open} w={"100%"}>
          Request an invite
        </Button>
      </div>
      <Footer />

      <Modal opened={opened} onClose={close}>
        <Input label="Email" placeholder="Your Email" />
      </Modal>
    </div>
  );
};

export default Home;
