import { useBgContext } from "../contexts/BgColorContext";

const BgWrapper = ({ children }) => {
    const { bgColor, text } = useBgContext()
  return (
    <div className=" min-h-screen" style={{ backgroundColor: bgColor, color: text }}>
      {children}
    </div>
  );
}
export default BgWrapper;