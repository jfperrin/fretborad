import { fbSize } from "@/app/lib/guitar";
import isEmpty from "lodash.isempty";
import { useSelector } from "react-redux";
import { getFretPositions } from "@/app/guitar/ui/slice";

const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19];

const Dots = () => {
  const fretPositions = useSelector(getFretPositions);

  if (isEmpty(fretPositions)) return null;

  return (
    <>
      {dotFrets.map((fret, i) => {
        if (fret === 12) {
          return (
            <g key={`dot-${fret}-${i}`} id={`dots-${fret}`}>
              <circle
                cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
                cy={(2 * fbSize.height) / 6}
                r="6"
                fill="#a98"
              />
              <circle
                cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
                cy={(4 * fbSize.height) / 6}
                r="6"
                fill="#a98"
              />
            </g>
          );
        }
        return (
          <circle
            onClick={() => {
              alert(`dot ${fret}`);
            }}
            key={`dot-${fret}`}
            id={`dot-${fret}`}
            cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
            cy={fbSize.height / 2}
            r="6"
            fill="#a98"
          />
        );
      })}
    </>
  );
};
export default Dots;
