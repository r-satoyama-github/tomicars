import Image from "next/image";
import styles from "styles/car-panel.module.css";
import { useRef } from "react";

export default function CarPanel(props) {
  const { no, name, image_path, sound_path, blurDataURL } = props.tomica;
  console.log(props);
  const audioEl = new useRef(null);
  const onClick = () => {
    console.log(audioEl);
    audioEl.current.play();
  };

  return (
    <div className={styles.flexContainer} onClick={onClick}>
      <p className={styles.no}>{no === 999 ? "なし" : no}</p>
      <figure>
        <Image
          src={image_path}
          alt=""
          layout="responsive"
          width={1980}
          height={1150}
          // sizes="(min-width: 250px) 250px, 100vw"
          sizes="50vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </figure>
      <audio ref={audioEl} src={sound_path} />
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export async function getServerSideProps(context) {
  const tomica = context.params.tomica;
  const no = tomica.no;
  const name = tomica.name_jp;
  const image_path = tomica.image_path;
  const sound_path = tomica.sound_path;
  return {
    props: {
      no: no,
      name: name,
      image_path: image_path,
      sound_path: sound_path,
    },
  };
}
