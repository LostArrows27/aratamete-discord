import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div
        id="nav"
        className="h-full w-[72px] md-max:hidden z-30 flex-col fixed inset-y-0"
      >
        <NavigationSidebar />
      </div>
      <main id="main" className="pl-[72px] md-max:pl-0 h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
