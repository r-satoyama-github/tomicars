import { Heading2 } from "components/texts/heading2";
import { Text } from "components/texts/text";
import Image from "next/image";
import styled from "styled-components";

export function Content(props) {
  const { title, text, path } = props;
  return (
    <>
      <SContentArea>
        <SHr />
        <Heading2 style={{ textAlign: "center" }}>{title}</Heading2>
        <Text style={{ textAlign: "center" }}>{text}</Text>
        <figure style={{ maxWidth: "40vw", margin: "auto" }}>
          <Image
            src={path}
            alt=""
            layout="responsive"
            sizes="40vw"
            width={150}
            height={150}
          />
        </figure>
      </SContentArea>
    </>
  );
}

const SHr = styled.hr`
  border-top: 1px solid var(--navy);
  width: 70vw;
`;

const SContentArea = styled.div`
  padding: 10px 10px;
`;
