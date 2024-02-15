import Nav from "../../nav";
import { PageWrapperStyle } from "../layout.style";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapperStyle>
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
      <Nav />
      {/* An <Outlet> renders whatever child route is currently active, 
      so you can think about this <Outlet> as a placeholder for the child routes we defined above. */}
      {children}
    </PageWrapperStyle>
  );
}

export default Layout;
