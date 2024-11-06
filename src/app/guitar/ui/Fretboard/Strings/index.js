import { fbSize } from "@/app/lib/guitar";
import { getStringPositions } from "@/app/guitar/ui/slice";
import { useSelector } from "react-redux";

const Strings = () => {
  const stringPositions = useSelector(getStringPositions);

  return (
    <>
      {stringPositions.map((pos, i) => (
        <line
          key={`string-${i}`}
          id={`string-${i}`}
          x1="0"
          y1={pos}
          x2={fbSize.width}
          y2={pos}
          stroke="#ddd"
          strokeWidth="4"
        />
      ))}
    </>
  );
};

export default Strings;
