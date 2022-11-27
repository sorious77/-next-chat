import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full p-0 h-full">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
