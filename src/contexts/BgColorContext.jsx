import { createContext, useContext, useState } from "react";

const BgColorContext = createContext()

export const useBgContext = () => useContext(BgColorContext);
export const BackgroundProvider=({ children }) => {
    const [bgColor, setBgColor] = useState('red');
    const [text, setText] = useState('white');

  return (
    <BgColorContext.Provider value={{ bgColor, setBgColor ,text, setText }}>
      {children}
    </BgColorContext.Provider>
  );


}

