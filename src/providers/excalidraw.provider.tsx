import React, { createContext, useContext, useEffect, useState } from "react";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";

interface ExcalidrawAPIProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  excalidrawImperativeAPI: ExcalidrawImperativeAPI | null;
}

type ExcalidrawAPIContextValue = {
    excalidrawAPI: ExcalidrawImperativeAPI | null;
    setExcalidrawAPI: React.Dispatch<
      React.SetStateAction<ExcalidrawImperativeAPI | null>
    >;
  } | null;

export const ExcalidrawAPIContext = createContext<ExcalidrawAPIContextValue>(null);

const ExcalidrawAPIProvider: React.FC<ExcalidrawAPIProviderProps> = ({
  children,
  excalidrawImperativeAPI,
}) => {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(excalidrawImperativeAPI);

  useEffect(() => {
    setExcalidrawAPI(excalidrawImperativeAPI);
  }, [excalidrawImperativeAPI]);

  return (
    <ExcalidrawAPIContext.Provider value={{ excalidrawAPI, setExcalidrawAPI }}>
      {children}
    </ExcalidrawAPIContext.Provider>
  );
};

ExcalidrawAPIProvider.displayName = "ExcalidrawAPIProvider";

export { ExcalidrawAPIProvider };
