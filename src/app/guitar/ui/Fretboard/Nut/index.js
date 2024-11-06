import { fbSize } from "@/app/lib/guitar";
import isEmpty from "lodash.isempty";
import { getFretPositions } from "@/app/guitar/ui/slice";
import { useSelector } from "react-redux";

const Nut = () => {
  const fretPositions = useSelector(getFretPositions);

  if (isEmpty(fretPositions)) return null;

  return (
    <rect
      x="0"
      y="0"
      width={fretPositions[0]}
      height={fbSize.height}
      fill="rgba(0,0,0,0.5)"
    />
  );
};

export default Nut;
