import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    { id: 0, marker: "open" },
    { id: 1, marker: "open" },
    { id: 2, marker: "open" },
    { id: 3, marker: "open" },
    { id: 4, marker: "open" },
    { id: 5, marker: "open" },
    { id: 6, marker: "open" },
    { id: 7, marker: "open" },
    { id: 8, marker: "open" },
  ],
};

const board = createSlice({
  name: "board",
  initialState,
  reducers: {
    reset: initialState,
    successMarker: (state, { payload }) => {
      return {
        ...state,
        board: state.board?.map((data) =>
        data.id === payload.id ? payload : data
        ),
      };
    },
  },
});

export const { successMarker, reset } = board.actions;

export default board.reducer;
