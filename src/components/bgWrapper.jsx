import { useBgContext } from "../contexts/BgColorContext";

const BgWrapper = ({ children }) => {
    const { bgColor, text } = useBgContext()
  return (
    <div className={`bg-${bgColor}  text-${text}  min-h-screen`}>
      {children}
    </div>
  );
}
export default BgWrapper;