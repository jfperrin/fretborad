"use client";

import { createFretPositions, createStringPositions } from "@/app/guitar/utils";
import { useEffect, useState } from "react";

export default function Note({ fret, string }) {
  const [stringPositions, setStringPositions] = useState([]);
  const [fretPositions, setFretPositions] = useState([]);

  useEffect(() => {
    setStringPositions(createStringPositions());
    setFretPositions(createFretPositions());
  }, []);

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
