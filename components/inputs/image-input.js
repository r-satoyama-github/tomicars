import styled from "styled-components";
export const ImageInput = (props) => {
  const { placeholder, base64, setBase64 } = props;

  const onChange = (event) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
      setBase64(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <>
      <SContainer>
        <SImg id="preview" src={base64} />
        <SLabel>
          <SInput
            type="file"
            accept="image/*"
            placeholder={placeholder}
            onChange={onChange}
          />
          画像を選択する
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

const SImg = styled.img`
  width: 50vw;
  /* background-color: var(--gray-10); */
  background-color: var(--beige-25);
  height: 15vh;
  object-fit: contain;
  display: inline-block;
  outline: none;
`;
const SLabel = styled.label`
  width: 100%;
  text-align: center;
  display: inline-block;
  position: relative;
  /* background-color: var(--gray-10); */
  background-color: var(--white);
  /* border: 2px var(--gray-25) solid; */
  border: 2px var(--beige-25) solid;
  font-size: var(--body);
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.3s;
  min-width: 100px;
  @media (hover: hover) {
    &:hover {
      /* background-color: var(--gray-25); */
      background-color: var(--beige-25);
      transition: all 0.3s;
    }
  }

  @media (hover: none) {
    -webkit-tap-highlight-color: transparent;
    &:active {
      /* background-color: var(--gray-25); */
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
