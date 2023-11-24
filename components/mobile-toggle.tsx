import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { NavigationSidebar } from "./navigation/navigation-sidebar";
import ServerSidebar from "@/components/server/server-sidebar";

const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex gap-0 p-0 remove-button">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <ServerSidebar serverID={serverId} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
