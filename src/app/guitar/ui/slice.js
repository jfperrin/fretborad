import { fbSize } from "@/app/lib/guitar";

import { createSlice } from "@reduxjs/toolkit";

const initializeFretPositions = () => {
  const frets = 20;
  const dMax = 0.95;

  const scaleLen = dMax / (1 - Math.pow(2, -(frets + 1) / 12));

  const perc = Array(frets + 1)
    .fill(0)
    .map((d, n) => scaleLen * (1 - Math.pow(2, -(n + 1) / 12)));

  return perc.map((f) => f * fbSize.width);
};

const initialState = {
  selectedNote: "C",
  stringPositions: Array(6)
    .fill(0)
    .map((s, i) => ((5.5 - i) * fbSize.height) / 6),
  fretPositions: initializeFretPositions(),
  notePositions: {
    C: [
      [8, 1],
      [3, 2],
      [10, 3],
      [5, 4],
      [1, 5],
      [8, 6],
    ],
    D: [
      [10, 1],
      [5, 2],
      [0, 3],
      [12, 3],
      [7, 4],
      [3, 5],
      [10, 6],
    ],
    E: [
      [0, 1],
      [12, 1],
      [7, 2],
      [2, 3],
      [9, 4],
      [5, 5],
      [0, 6],
      [12, 6],
    ],
    F: [
      [1, 1],
      [8, 2],
      [3, 3],
      [10, 4],
      [6, 5],
      [1, 6],
    ],
    G: [
      [3, 1],
      [10, 2],
      [5, 3],
      [12, 4],
      [0, 4],
      [8, 5],
      [3, 6],
    ],
    A: [
      [5, 1],
      [12, 2],
      [0, 2],
      [7, 3],
      [2, 4],
      [10, 5],
      [5, 6],
    ],
    B: [
      [7, 1],
      [2, 2],
      [9, 3],
      [4, 4],
      [0, 5],
      [12, 5],
      [7, 6],
    ],
  },
};

export const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    setSelectedNote: (state, action) => {
      state.selectedNote = action.payload;
    },
  },
  selectors: {
    getStringPositions: (guitar) => guitar.stringPositions,
    getFretPositions: (guitar) => guitar.fretPositions,
    getSelectedNote: (guitar) => guitar.selectedNote,
    getNotePositions: (guitar) => guitar.notePositions,
  },
});

export const { setSelectedNote } = guitarSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  getStringPositions,
  getFretPositions,
  getSelectedNote,
  getNotePositions,
} = guitarSlice.selectors;

export default guitarSlice.reducer;
