import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import CarPanel from "components/car-panel";
import fsPromises from "fs/promises";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const tomicars = props.tomicars;
  return (
    <>
      <div className={styles.container}>
        {tomicars.map((tomica) => (
          <CarPanel key={tomica.id} tomica={tomica} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data/data.json");
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);
  return {
    props: objectData,
  };
};
