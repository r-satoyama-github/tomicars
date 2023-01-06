import Image from "next/image";
import styles from "styles/car-panel.module.css";
import { useRef } from "react";

export default function CarPanel(props) {
  const { tomica } = props;
  const audioEl = new useRef(null);
  const onClick = () => {
    console.log(audioEl);
    audioEl.current.play();
  };

  return (
    <div className={styles.flexContainer} onClick={onClick}>
      <p className={styles.no}>{tomica.no === 999 ? "なし" : tomica.no}</p>
      <figure>
        <Image
          src={tomica.image_path}
          alt=""
          layout="responsive"
          width={1980}
          height={1150}
          // sizes="(min-width: 250px) 250px, 100vw"
          sizes="50vw"
        />
      </figure>
      <audio ref={audioEl} src={tomica.sound_path} />
      <span className={styles.name}>{tomica.name_jp}</span>
    </div>
  );
}
