import { ThemeContext } from "@contexts/ThemeContexts";
import { useContext } from "react";
//import { ThemeItem } from "@contexts/ThemeContexts";

export const Header = () => {
  //consume ThemeContext
  const {theme} = useContext(ThemeContext)
  return (
    <p className="display-3 text-center fst-italic"
    style={{color:theme.fgColor}}>

      A simple useContext example
    </p>
  );
};
