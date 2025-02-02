"use client";

import React, { useEffect } from "react";
import Header from "../excalidraw/header";
import {
  MenuButton,
  PresentButton,
  InviteButton,
  DownloadButton,
  MoreButton,
  UndoButton,
  RedoButton,
} from "../button";
import dynamic from "next/dynamic";
import { Skeleton, Space } from "antd";
import useExcalidrawAPI from "@/hooks/excalidraw/useExcalidrawAPI";

const AvatarGroup = dynamic(
  async () => (await import("../avatar-group")).default,
  {
    loading: () => (
      <div>
        <Skeleton.Avatar active={true} shape="circle" />
        <Skeleton.Avatar active={true} shape="circle" />
        <Skeleton.Avatar active={true} shape="circle" />
      </div>
    ),
    ssr: false,
  }
);

const Navbar = () => {
  const { excalidrawAPI} = useExcalidrawAPI();
  const showSceneElements = () => {
    if (!excalidrawAPI) return;
    const sceneData = excalidrawAPI.getSceneElements(); // 📌 Ambil data dari Excalidraw
    console.log("Scene Elements:", sceneData);
  };

  useEffect(()=>{
    if (!excalidrawAPI) return;    
    console.log(excalidrawAPI?.getAppState().activeTool.type);
  }, [])

  excalidrawAPI?.getAppState().activeTool.type
  return (
    <div className="flex w-full space-between items-center px-10 py-4 gap-4 bg-white border-b border-[#cccccc]">
      <div className="flex w-full items-center space-x-4">
        <MenuButton />
        <Header />        
      </div>
      <div className="flex w-full items-center gap-2 space-between bg-emerald-400/0 justify-end">
        <UndoButton />
        <RedoButton />
        <AvatarGroup />
        <PresentButton />
        <DownloadButton
          color="primary"
          style={{ backgroundColor: "#000000" }}
          onClick={showSceneElements}
        />
        <InviteButton />
        <MoreButton />
      </div>
    </div>
  );
};

export default Navbar;
