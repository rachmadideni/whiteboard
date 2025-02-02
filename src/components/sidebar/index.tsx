"use client"
import { useState } from "react";
import { Sidebar as BaseSidebar } from "@excalidraw/excalidraw";
import type { SidebarProps } from "@excalidraw/excalidraw/types/components/Sidebar/common";

const Sidebar = (props:SidebarProps) => {
    const [docked, setDocked] = useState(false);
    return <BaseSidebar {...props} docked={docked} onDock={setDocked}>
        <BaseSidebar.Header />
        <h1>Test Header</h1>
    </BaseSidebar>;
}

export default Sidebar;