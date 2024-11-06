import { fbSize } from "@/app/lib/guitar";
import { useSelector } from "react-redux";
import { getFretPositions } from "@/app/guitar/ui/slice";

const Frets = () => {
  const fretPositions = useSelector(getFretPositions);

  return (
    <>
      {fretPositions.map((pos, i) => (
        <line
          key={`fret-${i}`}
          id={`fret-${i}`}
          x1={pos}
          y1="0"
          x2={pos}
          y2={fbSize.height}
          stroke="#b93"
          strokeWidth="3"
        />
      ))}
    </>
  );
};
export default Frets;
