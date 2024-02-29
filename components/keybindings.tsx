'use client'

import { useEffect } from "react";

export default function Keybindings({children}: React.HTMLAttributes<HTMLElement>) {
    useEffect(() => {
        function handleKeyDown(this: Document, e: KeyboardEvent) {
            if(e.ctrlKey && e.shiftKey &&e.code === "KeyQ"){
                console.log("logout");
            }
        } 
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [])
  return children;
}
