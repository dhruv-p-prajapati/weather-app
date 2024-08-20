import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../constants/SidebarLinks";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ILinkItem } from "@/types/Linkitem.types";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent
          side={"left"}
          className="fixed left-3 top-1/2 flex h-0 w-0 -translate-y-1/2 flex-col rounded-full bg-primary-foreground"
        >
          <TooltipProvider>
            <div className="fixed left-3 top-1/2 flex -translate-y-1/2 flex-col rounded-full bg-primary-foreground px-2 py-4">
              {sidebarLinks.map((sidebarLink: ILinkItem) => (
                <Tooltip key={sidebarLink.slug}>
                  <NavLink
                    to={sidebarLink.slug}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-center px-2 py-4 text-lg",
                        isActive &&
                          "rounded-full bg-primary text-background duration-300",
                      )
                    }
                  >
                    <SheetClose>
                      <TooltipTrigger>{sidebarLink.icon}</TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{sidebarLink.label}</p>
                      </TooltipContent>
                    </SheetClose>
                  </NavLink>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
