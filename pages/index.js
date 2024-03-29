import styles from "../styles/Home.module.css";
import Meta from "components/meta";

import styled from "styled-components";
import { Heading1 } from "components/texts/heading1";

import { Content } from "components/contents/content";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const OnClickTomicars = () => {
    router.push("/tomicars");
  };
  const OnClickVoices = () => {
    router.push("/voices");
  };
  const OnClickAbout = () => {
    router.push("/about");
  };
  return (
    <>
      <Meta pageTitle="HOME" />
      <div className={styles.container}>
        <div>
          <Heading1
            style={{ textAlign: "center", padding: "20px 0px 0px 0px" }}
          >
            ようこそ、STYMの世界へ
          </Heading1>
        </div>
        <Content
          onClick={OnClickTomicars}
          title="Tomicars"
          text="ISSHINのトミカをのぞいてみる？"
          path="/images/home/car.png"
        />
        <Content
          onClick={OnClickVoices}
          title="Voices"
          text="ISSHINの声でキュンしてみる？"
          path="/images/home/kyun.png"
        />
        <Content
          onClick={OnClickAbout}
          title="About"
          text="STYMのこと知ってみる？"
          path="/images/home/about.png"
        />
      </div>
    </>
  );
}
