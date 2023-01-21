import { PrimaryButton } from "components/buttons/primary-button";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Manage() {
  console.log("Manage Created");
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
    alert("Add Clicked");
  };
  const onClickEdit = () => {
    alert("Edit Clicked");
  };
  const onClickDelete = () => {
    alert("Delete Clicked");
  };
  return (
    <>
      <SContainer>
        <SLink href="/manage/add">ADD</SLink>
        <SLink href="/manage/edit">EDIT</SLink>
        <SLink href="/manage/delete">DELETE</SLink>
        {/* <PrimaryButton onClick={onClickAdd}>ADD</PrimaryButton>
        <PrimaryButton onClick={onClickEdit}>EDIT</PrimaryButton>
        <PrimaryButton onClick={onClickDelete}>DELETE</PrimaryButton> */}
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
  background-color: var(--gray-75);
  text-align: center;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
