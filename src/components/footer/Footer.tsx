import { Title, Text } from "@mantine/core";
import styles from "./Footer.module.css";
import { TFooterProps } from "./types";

const Footer = ({ title, copyright }: TFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Title className={styles.footerTitle} size="h4">
        {title}
      </Title>
      <Text className={styles.footerCopyright}>{copyright}</Text>
    </footer>
  );
};

export default Footer;
