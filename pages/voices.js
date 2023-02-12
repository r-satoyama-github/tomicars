import Meta from "components/meta";
import { Heading1 } from "components/texts/heading1";
import { Heading2 } from "components/texts/heading2";
import { Text } from "components/texts/text";
import styles from "styles/voices.module.css";
import fsPromises from "fs/promises";
import path from "path";
import styled from "styled-components";
import VoicePanel from "components/voice-panel";

export default function Voices(props) {
  const voices = props.voices;
  console.log(voices);
  return (
    <>
      <Meta pageTitle="VOICES" />
      <div className={styles.container}>
        <Heading1
          style={{
            textAlign: "center",
            padding: "10px 0px 0px 0px",
            clipPath: "inset(0)",
            animation: "initial",
          }}
        >
          Voices
        </Heading1>

        {Array.from(new Set(voices.map((voice) => voice.genre))).map(
          (genre) => {
            return (
              <SContainer key={genre}>
                <Heading2 style={{ textAlign: "center" }}>{genre}</Heading2>
                <div className={styles.gridContainer}>
                  {voices
                    .filter((voice) => voice.genre == genre)
                    .map((voice) => (
                      <VoicePanel voice={voice} />
                    ))}
                </div>
              </SContainer>
            );
          }
        )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data/voices-data.json");
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);
  return {
    props: objectData,
  };
};

const SContainer = styled.div`
  margin: 10px;
`;
