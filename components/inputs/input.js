import styled from "styled-components";
export const Input = (props) => {
  const { placeholder = "", onChange, type, value = "" } = props;
  return (
    <>
      <SInput
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};

const SInput = styled.input`
  /* background-color: var(--gray-10); */
  background-color: var(--white);
  outline: none;
  /* border: 2px var(--gray-25) solid; */
  border: 2px var(--beige-25) solid;
  padding: 6px 12px;
  border-radius: 8px;
  width: 50vw;
  min-width: 100px;
  font-size: var(--body);
`;
