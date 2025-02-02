"use client";

import { useEffect, useState } from "react";
import {
  Excalidraw,
  // WelcomeScreen,
  Sidebar,
  Footer,
  MainMenu,
} from "@excalidraw/excalidraw";

import { useAppDispatch } from "@/lib/hooks";
import { setExcalidrawAPI } from "@/slices/excalidraw.slices";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import Navbar from "../navbar";
import { MoreButton, OctopusButton, UserButton } from "../button";
import { ExcalidrawAPIProvider } from "@/providers/excalidraw.provider";

// const ExcalidrawWrapper = ({ setExcalidrawAPI }: {setExcalidrawAPI: any}) => {
const ExcalidrawWrapper = () => {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  // const dispatch = useAppDispatch();
  const [docked, setDocked] = useState(true);

  useEffect(()=>{
    if(!excalidrawAPI){
      console.log("excalidrawAPI is not found!!")
    }
  },[])

  return (
    <ExcalidrawAPIProvider excalidrawImperativeAPI={excalidrawAPI}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-full h-[100vh]">
          <Navbar />
          <div className="excalidraw-wrapper h-[96vh] w-[100%] px-4 py-4 bg-gray-100 rounded-md">
            <Excalidraw
              excalidrawAPI={(api) => setExcalidrawAPI(api)}              
              UIOptions={{
                dockedSidebarBreakpoint: 0,
              }}
            >
              <Sidebar name="custom" docked={docked} onDock={setDocked}>
                <Sidebar.Header>
                  <p>Im on the sidebar header</p>
                </Sidebar.Header>
                <Sidebar.Tabs>
                  <Sidebar.Tab tab="one">Tab one!</Sidebar.Tab>
                  <Sidebar.Tab tab="two">Tab two!</Sidebar.Tab>
                  <Sidebar.TabTriggers>
                    <Sidebar.TabTrigger tab="one">One</Sidebar.TabTrigger>
                    <Sidebar.TabTrigger tab="two">Two</Sidebar.TabTrigger>
                  </Sidebar.TabTriggers>
                </Sidebar.Tabs>
              </Sidebar>
              <Footer>
                <Sidebar.Trigger
                  name="custom"
                  tab="one"
                  style={{
                    marginLeft: "0.5rem",
                    background: "#70b1ec",
                    color: "white",
                  }}
                >
                  Toggle Custom Sidebar
                </Sidebar.Trigger>
              </Footer>
            </Excalidraw>
          </div>
        </div>
        <div className="flex flex-col items-center w-[64px] border-l border-l-[#DFE4EC] gap-4 py-6 px-2 right-0 overflow-hidden bg-white">
          <UserButton />
          <OctopusButton />
          <MoreButton />
        </div>
      </div>
    </ExcalidrawAPIProvider>
  );
};

export default ExcalidrawWrapper;
