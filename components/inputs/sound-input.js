import styled from "styled-components";

export const SoundInput = (props) => {
  const { placeholder = "", base64, setBase64 } = props;

  const onChange = (event) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      setBase64(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <>
      <SContainer>
        <SAudio src={base64} controls />
        <SLabel>
          <SInput
            type="file"
            placeholder={placeholder}
            onChange={onChange}
            accept="audio/*"
          />
          サウンドを選択する
        </SLabel>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 100%;
  min-width: 100px;
  gap: 5px;
  flex-direction: column;
  padding: 5px;
`;

const SAudio = styled.audio`
  width: 50vw;
  padding: 5px;
`;
const SLabel = styled.label`
  width: 100%;
  text-align: center;
  display: inline-block;
  position: relative;
  /* background-color: var(--gray-10); */
  background-color: var(--white);
  font-size: var(--body);
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.3s;
  min-width: 100px;
  border: 2px var(--beige-25) solid;
  @media (hover: hover) {
    &:hover {
      background-color: var(--beige-25);
      transition: all 0.3s;
    }
  }

  @media (hover: none) {
    -webkit-tap-highlight-color: transparent;
    &:active {
      background-color: var(--beige-25);
    }
  }
`;
const SInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  outline: none;
`;
