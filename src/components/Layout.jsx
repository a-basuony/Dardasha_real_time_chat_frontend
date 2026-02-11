import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className={`drawer ${showSidebar ? "lg:drawer-open" : ""}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar showSidebar={showSidebar} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      {showSidebar && <Sidebar />}
    </div>
  );
};
export default Layout;
