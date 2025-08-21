import {
  BookOpen,
  House,
  Layers,
  Library,
  MessageCircleMore,
  Rocket,
  User,
} from "lucide-react";
import { NavbarTypeProps } from "../types/config";

export const NavbarApp: NavbarTypeProps[] = [
  {
    icon: House,
    href: "#",
    title: "Home",
  },
  {
    icon: User,
    href: "#",
    title: "User",
  },
  {
    icon: Layers,
    href: "#",
    title: "Layer",
  },
  {
    icon: Rocket,
    href: "#",
    title: "Roket",
  },
  {
    icon: Library,
    href: "#",
    title: "Libray",
  },
  {
    icon: BookOpen,
    href: "#",
    title: "Book",
  },
  {
    icon: MessageCircleMore,
    href: "#",
    title: "Chat",
  },
];
