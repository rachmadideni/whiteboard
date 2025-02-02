import { useContext } from "react";
import { ExcalidrawAPIContext } from "@/providers/excalidraw.provider";

const useExcalidrawAPI = () => {
  const context = useContext(ExcalidrawAPIContext);
  if (!context) {
    throw new Error(
      "useExcalidrawAPI must be used within an ExcalidrawAPIProvider"
    );
  }
  return context;
};

export default useExcalidrawAPI;