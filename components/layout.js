import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
