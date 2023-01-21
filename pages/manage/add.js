import axios from "axios";
import { PrimaryButton } from "components/buttons/primary-button";
import { Input } from "components/inputs/input";
import { aws_api_baseurl } from "libs/constants";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Add(props) {
  const [id, setId] = useState(0);
  const [no, setNo] = useState(0);
  const onClickSubmit = () => {
    const data = {
      id: 0,
      no: 222,
      name_en: "Name English",
      name_jp: "Name Jpanaese",
      image_path: "/images/xxx.PNG",
      sound_path: "/sounds/xxx.m4a",
      manufacturer: "XXX",
      provider: "パパ",
      got_at: "2023-01-01",
      created_at: "2023-01-01",
      deleted: false,
    };
    axios
      .post(aws_api_baseurl + "/tomicars", data)
      .then((red) => {
        console.log(red);
      })
      .catch((error) => {
        console.log("POST ERROR AAAAAA: " + error);
      });
  };
  return (
    <>
      <h1>ADD</h1>
      <SContainer>
        <Input
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          value={no}
          placeholder="NO"
          onChange={(e) => setNo(e.target.value)}
        />
        <PrimaryButton onClick={onClickSubmit}>Submit</PrimaryButton>
        <SLink href="/manage">Cancel</SLink>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  align-items: center;
  justify-content: center;
  row-gap: 1.5em;
`;

const SLink = styled(Link)`
  color: red;
  text-align: center;
  padding: 10px 0px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
