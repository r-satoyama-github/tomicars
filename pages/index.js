import styles from "../styles/Home.module.css";
import CarPanel from "components/car-panel";
import fsPromises from "fs/promises";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

export default function Home(props) {
  const tomicars = props.tomicars;
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

export const getStaticProps = async () => {
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
  tomicars.sort(function (a, b) {
    if (a.no > b.no) {
      return 1;
    } else {
      return -1;
    }
  });
  const tomicaObj = {
    tomicars: tomicars,
  };

  return {
    props: tomicaObj,
  };
};
