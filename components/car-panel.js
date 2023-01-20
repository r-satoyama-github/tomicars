import Image from "next/image";
import styles from "styles/car-panel.module.css";
import { useRef } from "react";

export default function CarPanel(props) {
  // Blurあり
  // const { no, name, image_path, sound_path, blurDataURL } = props.tomica;

  const { no, name, image_path, sound_path } = props.tomica;
  const audioEl = new useRef(null);
  const onClick = () => {
    audioEl.current.play();
  };

  return (
    <div className={styles.flexContainer} onClick={onClick}>
      <p className={styles.no}>{no === 999 ? "なし" : no}</p>
      <figure>
        {/* Blurあり */}
        {/* <Image
          src={image_path}
          alt=""
          layout="responsive"
          width={1980}
          height={1150}
          sizes="50vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        /> */}

        <Image
          src={image_path}
          alt=""
          layout="responsive"
          width={1980}
          height={1150}
          // sizes="(max-width: 768px) 100vw, 50vw"
          sizes="50vw"
        />
      </figure>
      <audio ref={audioEl} src={sound_path} />
      <span className={styles.name}>{name}</span>
    </div>
  );
}
