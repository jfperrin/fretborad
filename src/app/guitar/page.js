"use client";

import Fretboard from "@/app/guitar/ui/Fretboard";
import { Select, SelectItem } from "@nextui-org/react";
import styles from "@/app/guitar/page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNotePositions, setSelectedNote } from "@/app/guitar/ui/slice";

export default function Page() {
  const dispatch = useDispatch();
  const notePositions = useSelector(getNotePositions);

  return (
    <div className={styles.guitarContainer}>
      <Select
        label="Note sur le manche"
        placeholder="Selectionnez une note"
        className="max-w-xs"
        onChange={(e) => dispatch(setSelectedNote(e.target.value))}
      >
        {Object.keys(notePositions).map((note) => (
          <SelectItem key={note}>{note}</SelectItem>
        ))}
      </Select>
      <div className={styles.guitar}>
        <Fretboard />
      </div>
    </div>
  );
}
