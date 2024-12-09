import { Title, Text } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { useDisclosure } from "@mantine/hooks";
import Modal from "../../components/modal/Modal";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { postInvitation } from "../../utils/api/post-invitation";
import RequestInviteForm from "./components/request-invite-form/RequestInviteForm";

export type TFormValues = {
  email: string;
  name: string;
};

const Home = () => {
  const [opened, { open, close }] = useDisclosure();

  const form = useForm<TFormValues>({
    initialValues: {
      email: "",
      name: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      name: hasLength({ min: 3 }, "Name should be at least 3 characters"),
    },
  });

  const mutation = useMutation({
    mutationFn: () => {
      return postInvitation(
        form.getInputProps("name").value,
        form.getInputProps("email").value
      );
    },
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    // Avoid refreshing the page
    event.preventDefault();

    // Call the API
    mutation.mutate();
  };

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
        <Button onClick={open}>Request an invite</Button>
      </div>
      <Footer />

      <Modal title="Form to sign up" opened={opened} onClose={close}>
        {mutation.isSuccess ? (
          "Successful"
        ) : (
          <RequestInviteForm
            onSubmit={handleFormSubmit}
            isLoading={mutation.isPending}
            form={form}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
