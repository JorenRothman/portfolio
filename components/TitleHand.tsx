import { motion } from "framer-motion";
import styles from "../styles/TitleHand.module.css";

interface Props {
  children: JSX.Element;
  className: string;
}

export default function TitleHand({ children, className }: Props) {
  return (
    <motion.div
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${className} ${styles.title}`}
    >
      {children}
    </motion.div>
  );
}
