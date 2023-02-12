import Meta from "components/meta";
import { Heading1 } from "components/texts/heading1";
import { Text } from "components/texts/text";
import styles from "styles/about.module.css";
export default function About() {
  return (
    <>
      <Meta pageTitle="ABOUT" pageDesc="About Tomicars" />
      <div className={styles.container}>
        <Heading1>ようこそ、STYMの世界へ</Heading1>
        <Text>
          STYMでは、ISSHINのトミカたちをのぞいたり、
          <br />
          声を聴いたりできます。
        </Text>
        <Text>トミカに触れると何かが起こる！？</Text>
        <Text>どうぞSTYMの世界をお楽しみください。</Text>
      </div>
    </>
  );
}
