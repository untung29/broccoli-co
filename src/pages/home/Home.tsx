import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { useDisclosure } from "@mantine/hooks";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import { hasLength, isEmail, useForm } from "@mantine/form";

const Home = () => {
  const [opened, { open, close }] = useDisclosure();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      name: hasLength({ min: 3 }, "Name should be at least 3 characters"),
    },
  });

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

      <Modal title="Form to sign up" opened={opened} onClose={close}>
        <form
          className={styles.form}
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            {...form.getInputProps("name")}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Type your email"
            {...form.getInputProps("email")}
          />

          <Button type="submit" w={"100%"}>
            Submit Form
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
