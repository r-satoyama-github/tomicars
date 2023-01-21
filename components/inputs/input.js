import styled from "styled-components";
export const Input = (props) => {
  const { placeholder = "", onChange } = props;
  return (
    <>
      <SInput onChange={onChange} placeholder={placeholder} />
    </>
  );
};

const SInput = styled.input`
  background-color: var(--gray-10);
  outline: none;
  border: 2px var(--gray-25) solid;
  padding: 6px 12px;
  border-radius: 8px;
`;
