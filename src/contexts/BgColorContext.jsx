import { createContext, useContext, useState } from "react";

const BgColorContext = createContext()

export const useBgContext = () => useContext(BgColorContext);
export const BackgroundProvider=({ children }) => {
    const [bgColor, setBgColor] = useState('white');
    const [text, setText] = useState('black');

  return (
    <BgColorContext.Provider value={{ bgColor, setBgColor ,text, setText }}>
      {children}
    </BgColorContext.Provider>
  );


}

