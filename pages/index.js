import styles from "../styles/Home.module.css";
import CarPanel from "components/car-panel";
import fsPromises from "fs/promises";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

export default function Home(props) {
  const tomicars = props.tomicars;
  console.log(props.tomicars);
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>タップしてね</p>
        <div className={styles.gridContainer}>
          {tomicars.map((tomica) => (
            <CarPanel key={tomica.image_path} tomica={tomica} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const filePath = path.join(process.cwd(), "data/data.json");
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);
  const tomicars = await Promise.all(
    objectData.tomicars.map(async (tomica) => {
      const { base64 } = await getPlaiceholder(tomica.image_path);
      return {
        no: tomica.no,
        name: tomica.name_jp,
        image_path: tomica.image_path,
        sound_path: tomica.sound_path,
        blurDataURL: base64,
      };
    })
  );
  const tomicaObj = {
    tomicars: tomicars,
  };

  return {
    props: tomicaObj,
  };
};
