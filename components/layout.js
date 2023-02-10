import Footer from "./footer";
import Header from "./header";

import styled from "styled-components";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />

      <SMain>{children}</SMain>

      <Footer />
    </>
  );
}

const SMain = styled.main`
  top: 50px;
  position: relative;
  margin-bottom: 60px;
`;
