import { Text } from "@mantine/core";
import styles from "./SuccessfulInviteRequest.module.css";
import Button from "../../../../components/button/Button";
import { TSuccessfulInviteRequest } from "./type";

const SuccessfulInviteRequest = ({ onClose }: TSuccessfulInviteRequest) => {
  return (
    <div className={styles.successfulInviteRequest}>
      <Text ta="center" size="1.5rem" fw={600}>
        All Done
      </Text>
      <Text>
        You're on the list! 🎉 We're excited to have you and will notify you as
        soon as we launch—stay tuned!
      </Text>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default SuccessfulInviteRequest;
