"use client";

import {
  fbSize,
  createFretPositions,
  createStringPositions,
  notePositions,
} from "@/app/guitar/utils";
import { useEffect, useState } from "react";
import Note from "@/app/guitar/note";

export default function FretboardBackground() {
  const [stringPositions, setStringPositions] = useState([]);
  const [fretPositions, setFretPositions] = useState([]);

  useEffect(() => {
    setStringPositions(createStringPositions());
    setFretPositions(createFretPositions());
    console.warn(Object.entries(notePositions));
  }, []);

  const strings = stringPositions.map((pos, i) => {
    return (
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
    );
  });

  const frets = fretPositions.map((pos, i) => {
    return (
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
    );
  });

  const nut = (
    <rect
      x="0"
      y="0"
      width={fretPositions[0]}
      height={fbSize.height}
      fill="rgba(0,0,0,0.5)"
    />
  );

  const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19];
  const dots = dotFrets.map((fret, i) => {
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
  });

  return (
    <div className="fretboard-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
        width={`${fbSize.width}`}
        height={`${fbSize.height}`}
      >
        {nut}
        {frets}
        {strings}
        {dots}
        {Object.entries(notePositions.B).map(([_, position]) => (
          <Note
            fret={position[0]}
            string={position[1]}
            key={`${position[0]}-${position[1]}`}
          />
        ))}
      </svg>
    </div>
  );
}
