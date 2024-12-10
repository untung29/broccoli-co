import styles from "./Header.module.css";
import { THeaderProps } from "./types";
import Button from "../button/Button";
import { Box, useMantineColorScheme } from "@mantine/core";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = ({ title }: THeaderProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <Box>
        <Button onClick={toggleColorScheme}>
          {colorScheme === "dark" ? (
            <MdOutlineLightMode size="24" />
          ) : (
            <MdOutlineDarkMode size="24" />
          )}
        </Button>
      </Box>
    </header>
  );
};

export default Header;
