"use client";

import dynamic from "next/dynamic";
import AntdProvider from "@/providers/antd.provider";
import { LoaderIcon } from "@/components/button/svg-icon";

// Excalidraw doesn't support server side rendering yet so we have to use import the component once client is rendered
const ExcalidrawWrapper = dynamic(
  async () => (await import("../components/excalidraw/wrapper")).default,
  {
    loading: () => (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    ),
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col w-full h-[100vh] items-center justify-start bg-white">
      {/* <Provider store={store}> */}      
        <AntdProvider>          
            <ExcalidrawWrapper />          
        </AntdProvider>      
      {/* </Provider> */}
    </main>
  );
}
