import { fbSize } from "@/app/lib/guitar";
import Note from "@/app/guitar/ui/Fretboard/Note";
import styles from "./index.module.scss";
import Dots from "@/app/guitar/ui/Fretboard/Dots";
import Nut from "@/app/guitar/ui/Fretboard/Nut";
import Frets from "@/app/guitar/ui/Fretboard/Frets";
import Strings from "@/app/guitar/ui/Fretboard/Strings";
import { useSelector } from "react-redux";
import { getNotePositions, getSelectedNote } from "@/app/guitar/ui/slice";

export default function FretboardBackground() {
  const notePositions = useSelector(getNotePositions);
  const selectedNote = useSelector(getSelectedNote);

  return (
    <div className={styles.fretboardContainer}>
      <div className={styles.fretboardBackground}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
          width={`${fbSize.width}`}
          height={`${fbSize.height}`}
        >
          <Nut />
          <Frets />
          <Strings />
          <Dots />
          {Object.entries(notePositions[selectedNote]).map(([_, position]) => (
            <Note
              fret={position[0]}
              string={position[1]}
              key={`${position[0]}-${position[1]}`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
