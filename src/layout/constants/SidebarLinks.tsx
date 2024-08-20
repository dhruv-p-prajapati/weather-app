import { ILinkItem } from "@/types/Linkitem.types";
import { GrFavorite, GrHome, GrSettingsOption } from "react-icons/gr";

export const sidebarLinks: ILinkItem[] = [
  {
    label: "Home",
    slug: "/",
    icon: <GrHome />,
  },
  {
    label: "Favourites",
    slug: "/favourites",
    icon: <GrFavorite />,
  },
  {
    label: "Setting",
    slug: "/settings",
    icon: <GrSettingsOption />,
  },
];
