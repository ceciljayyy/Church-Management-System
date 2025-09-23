"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { toggleSidebar } from "../../state/globalSlice";

export default function SidebarToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const isSidebarCollapsed = useSelector(
    (state: RootState) => state.global.isSidebarCollapsed
  );

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        {isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      </button>

      <p className="mt-2 text-gray-700">
        Sidebar is <strong>{isSidebarCollapsed ? "Collapsed" : "Expanded"}</strong>
      </p>
    </div>
  );
}
