import styles from "styles/footer.module.css";
import Container from "./container";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
        </div>
      </Container>
    </footer>
  );
}
