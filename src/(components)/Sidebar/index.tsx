"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import {
  BookOpen,
  Calendar,
  Church,
  DollarSign,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  Users,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { toggleSidebar } from "../../state/globalSlice";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  const linkContent = (
    <div
      className={`cursor-pointer flex items-center ${
        isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
      }
      hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
        isActive ? "bg-blue-200 text-white" : ""
      }`}
    >
      <Icon className="w-6 h-6 !text-gray-700" />
      {!isCollapsed && <span className="font-medium text-gray-700">{label}</span>}
    </div>
  );

  return (
    <Link href={href}>
      {isCollapsed ? (
        <Tooltip.Provider delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>{linkContent}</Tooltip.Trigger>
            <Tooltip.Content
              side="right"
              className="bg-gray-900 text-white px-2 py-1 rounded text-sm shadow-lg"
            >
              {label}
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        linkContent
      )}
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(
    (state: RootState) => state.global.isSidebarCollapsed
  );

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-16" : "w-72"
  } bg-white transition-all duration-300 h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO + TOGGLE */}
      <div
        className={`flex gap-3 justify-between items-center pt-8 ${
          isSidebarCollapsed ? "px-2" : "px-6"
        }`}
      >
        {!isSidebarCollapsed && <h1 className="font-extrabold text-2xl">ICGC CMS</h1>}

        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/members" icon={Users} label="Members" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/events" icon={Calendar} label="Events" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/ministries" icon={Church} label="Ministries" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/sermons" icon={BookOpen} label="Sermons" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/finances" icon={DollarSign} label="Finances" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSidebarCollapsed} />
      </div>

      {/* FOOTER */}
      {!isSidebarCollapsed && (
        <div className="mb-10">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Church CMS
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
