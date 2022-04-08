import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="App">{children}</main>
    </>
  );
};

export default Layout;
