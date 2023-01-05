import styles from "styles/container.module.css";

export default function Container(props) {
  const { children, large = false } = props;
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
