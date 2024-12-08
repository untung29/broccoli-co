import { Title, Text } from "@mantine/core";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Title className={styles.footerTitle} size="h4">
        Made with &#x2665; in Singapore
      </Title>
      <Text className={styles.footerCopyright}>
        &copy; 2024 Broccoli & Co. All rights reserved.
      </Text>
    </footer>
  );
};

export default Footer;
