import Image from "next/image";
import styles from "styles/voice-panel.module.css";
import { useRef } from "react";

export default function VoicePanel(props) {
  const { voice } = props;
  const { title, image_path, sound_path } = voice;
  const audioEl = new useRef(null);
  const onClick = () => {
    audioEl.current.play();
  };

  return (
    <div className={styles.flexContainer} onClick={onClick}>
      <figure>
        <Image
          src={image_path}
          alt=""
          layout="responsive"
          width={1980}
          height={1150}
          sizes="30vw"
          style={{ borderRadius: "50%" }}
        />
      </figure>
      <audio ref={audioEl} src={sound_path} />
      <span className={styles.name}>{title}</span>
    </div>
  );
}
