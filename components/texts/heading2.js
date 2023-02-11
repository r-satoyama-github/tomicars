import styled from "styled-components";

export function Heading2(props) {
  const { children, style } = props;
  return (
    <>
      <SH2 style={style}>{children}</SH2>
    </>
  );
}

const SH2 = styled.h2`
  font-size: var(--small-heading2);
  clip-path: inset(0 100% 0 0);
  transition-property: clip-path;
  animation: slide 2s forwards;

  @media (min-width: 768px) {
    font-size: var(--heading2);
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
