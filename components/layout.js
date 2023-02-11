import Footer from "./footer";
import Header from "./header";

import styled from "styled-components";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />

      <SContainer>
        <main>{children}</main>
      </SContainer>

      <Footer />
    </>
  );
}

const SContainer = styled.div`
  top: clamp(50px, 10vw, 100px);
  position: relative;
  margin-bottom: clamp(50px, 10vw, 100px);
`;
