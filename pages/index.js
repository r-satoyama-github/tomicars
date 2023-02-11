import styles from "../styles/Home.module.css";
import Meta from "components/meta";

import styled from "styled-components";
import { Heading1 } from "components/texts/heading1";
import { Heading2 } from "components/texts/heading2";
import { Text } from "components/texts/text";

import img from "/public/images/kyun.png";
import Image from "next/image";
import { Content } from "components/contents/content";

export default function Home() {
  return (
    <>
      <Meta pageTitle="HOME" />
      <div className={styles.container}>
        <div>
          <Heading1 style={{ textAlign: "center" }}>
            ようこそ、STYMの世界へ
          </Heading1>
        </div>
        <Content
          title="Tomicars"
          text="ISSHINのトミカをのぞいてみる？"
          path="/images/car.png"
        />
        <Content
          title="Voices"
          text="ISSHINの声でキュンしてみる？"
          path="/images/kyun.png"
        />
        <Content
          title="About"
          text="STYMのこときいてみる？"
          path="/images/ear.png"
        />
      </div>
    </>
  );
}
