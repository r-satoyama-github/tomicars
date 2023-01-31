import { memo } from "react";
import { BaseButton } from "./base-button";
import styled from "styled-components";

export const PrimaryButton = memo(function PrimaryButton(props) {
  const { children, onClick } = props;
  console.log("PrimaryButton");
  return (
    <>
      <SButton onClick={onClick}>{children}</SButton>
    </>
  );
});

const SButton = styled(BaseButton)`
  background-color: var(--gray-75);
`;
