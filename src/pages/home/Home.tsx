import { Title, Text, useMantineColorScheme } from "@mantine/core";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { useDisclosure } from "@mantine/hooks";
import Modal from "../../components/modal/Modal";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { postInvitation } from "../../utils/api/post-invitation";
import RequestInviteForm from "./components/request-invite-form/RequestInviteForm";
import SuccessfulInviteRequest from "./components/successful-invite-request/SuccessfulInviteRequest";

export type TFormValues = {
  email: string;
  name: string;
  confirmEmail: string;
};

const Home = () => {
  const [opened, { open, close }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();

  const backgroundImage =
    colorScheme === "dark" ? styles.darkBackground : styles.lightBackground;

  const form = useForm<TFormValues>({
    initialValues: {
      email: "",
      name: "",
      confirmEmail: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      name: hasLength({ min: 3 }, "Name should be at least 3 characters"),
      confirmEmail: matchesField("email", "Emails are not the same"),
    },
  });

  const handleCloseModal = () => {
    mutation.reset();
    form.reset();

    close();
  };

  const mutation = useMutation({
    mutationFn: ({ email, name }: { email: string; name: string }) => {
      return postInvitation(name, email);
    },
  });

  const handleFormSubmit = form.onSubmit((values) => {
    mutation.mutate({ email: values.email, name: values.name });
  });

  return (
    <div className={`${styles.home} ${backgroundImage}`}>
      <Header title="Broccoli & Co." />
      <div className={styles.content}>
        <Title className={styles.title}>A better way to enjoy every day.</Title>
        <Text className={styles.textContent}>
          Be the first to know when we launch
        </Text>
        <Button onClick={open}>Request an invite</Button>
      </div>
      <Footer
        title="Made with &#x2665; in Singapore"
        copyright="&copy; 2024 Broccoli & Co. All rights reserved."
      />

      <Modal opened={opened} onClose={handleCloseModal}>
        {mutation.isSuccess ? (
          <SuccessfulInviteRequest onClose={handleCloseModal} />
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
