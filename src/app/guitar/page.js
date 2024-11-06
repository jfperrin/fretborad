"use client";

import Fretboard from "@/app/guitar/ui/Fretboard";
import { Select, SelectItem } from "@nextui-org/react";
import styles from "@/app/guitar/page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotePositions,
  getSelectedNote,
  setSelectedNote,
} from "@/app/guitar/ui/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const notePositions = useSelector(getNotePositions);
  const selectedNote = useSelector(getSelectedNote);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        setSelectedNote(
          Object.keys(notePositions)[randomIntFromInterval(1, 7 - 1)],
        ),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, notePositions]);

  return (
    <div className={styles.guitarContainer}>
      <div className={styles.selectedNote}>{selectedNote}</div>
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
