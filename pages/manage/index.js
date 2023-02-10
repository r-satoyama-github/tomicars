import { PrimaryButton } from "components/buttons/primary-button";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Manage() {
  console.log("Manage Created");
  const [count, setCount] = useState(0);

  return (
    <>
      <SContainer>
        <SLink href="/manage/add">ADD</SLink>
        <SLink href="/manage/edit">EDIT</SLink>
        <SLink href="/manage/delete">DELETE</SLink>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  display: flex;
  height: 50vh;
  width: 100vw;
  justify-content: space-around;
  flex-direction: column;
`;

const SLink = styled(Link)`
  background-color: var(--orange-accent);
  text-align: center;
  color: var(--white);
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
