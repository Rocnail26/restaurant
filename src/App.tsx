import AdminSection from "./components/sections/Admin/AdminSection";
import { MenuSection } from "./components/sections/Menu/MenusSection";
import { MenuProvider } from "./providers/MenuProvider/MenuProvider";

function App() {
  return (
    <MenuProvider>
      <div
        className="flex flex-col-reverse flex-start items-center min-h-screen p-0 font-roboto lg:flex-row"
      >
        <AdminSection />
        <MenuSection />
      </div>
    </MenuProvider>
  );
}

export default App;
