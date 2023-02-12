import styled from "styled-components";

export function Text(props) {
  const { children, style } = props;
  return (
    <>
      <SP style={style}>{children}</SP>
    </>
  );
}

const SP = styled.p`
  font-size: var(--body-mobile);
  clip-path: inset(0 100% 0 0);
  transition-property: clip-path;
  margin-top: 15px;
  animation: slide 2s forwards;

  @media (min-width: 768px) {
    font-size: var(--body);
  }

  @keyframes slide {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0);
    }
  }
`;
