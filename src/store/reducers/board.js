import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    { id: 0, marker: null },
    { id: 1, marker: null },
    { id: 2, marker: null },
    { id: 3, marker: null },
    { id: 4, marker: null },
    { id: 5, marker: null },
    { id: 6, marker: null },
    { id: 7, marker: null },
    { id: 8, marker: null },
  ],
};

const board = createSlice({
  name: "board",
  initialState,
  reducers: {
    reset: () => initialState,
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
