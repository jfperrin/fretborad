import isEmpty from "lodash.isempty";
import { getFretPositions, getStringPositions } from "@/app/guitar/ui/slice";
import { useSelector } from "react-redux";

export default function Note({ fret, string }) {
  const fretPositions = useSelector(getFretPositions);
  const stringPositions = useSelector(getStringPositions);

  if (isEmpty(fretPositions)) return null;
  if (isEmpty(stringPositions)) return null;

  if (fret === 0)
    return (
      <circle
        cx={80}
        cy={stringPositions[string - 1]}
        r="15"
        stroke="#fff"
        strokeWidth="3"
      />
    );

  return (
    <circle
      cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
      cy={stringPositions[string - 1]}
      r="15"
      fill={"#fff"}
      stroke="rgba(0,0,0,0.5)"
      strokeWidth="3"
    />
  );
}
