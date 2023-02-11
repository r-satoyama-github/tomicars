import styled from "styled-components";

export function Heading1(props) {
  const { children, style } = props;
  return (
    <>
      <SH1 style={style}>{children}</SH1>
    </>
  );
}

const SH1 = styled.h1`
  font-size: var(--heading2);
  clip-path: inset(0 100% 0 0);
  transition-property: clip-path;
  animation: slide 2s forwards;

  @media (min-width: 768px) {
    font-size: var(--heading1);
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
