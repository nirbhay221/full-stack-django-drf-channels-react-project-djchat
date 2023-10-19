
import {useMediaQuery,ThemeProvider,CssBaseline} from "@mui/material"
import {useState,useEffect,useMemo} from "react";
import React from "react"
import createMuiTheme from "../theme/theme";
import {ColorModeContext} from "../context/DarkModeContext";
import Cookie from "js-cookie";

interface ToggleColorModeProps{
    children : React.ReactNode;

}

const ToggleColorMode: React.FC<ToggleColorModeProps> =({children}) =>{
  
    const storeMode= Cookie.get("colorMode") as "light"|"dark";
    const preferredMode = useMediaQuery("([prefers-color-scheme: dark])");
    const defaultMode= storeMode || (preferredMode ? "dark" : "light");
  
  
    const [mode,setMode] = useState<"light"|"dark">(defaultMode);
  const toggleColorMode = React.useCallback(()=>{
    setMode((prevMode) => (prevMode === "light"?"dark":"light"));
  
  },[]); 
  useEffect(() =>{
    Cookie.set("colorMode",mode);

  },[mode]);
  const colorMode = useMemo(() =>({
    toggleColorMode
  }),[toggleColorMode]);
  const theme = React.useMemo(() => createMuiTheme(mode || "light" ),[mode]);
  return (
    <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme = {theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    </ColorModeContext.Provider>
  )

};
export default ToggleColorMode;