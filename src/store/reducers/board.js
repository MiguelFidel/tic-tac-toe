import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    {
      id: 0,
      marker: null,
      borderRight: 0,
      borderTop: "2px solid rgba(0, 0, 0, 1)",
    },
    {
      id: 1,
      marker: null,
      borderRight: 0,
      borderTop: "2px solid rgba(0, 0, 0, 1)",
    },
    {
      id: 2,
      marker: null,
      borderRight: "2px solid rgba(0, 0, 0, 1)",
      borderTop: "2px solid rgba(0, 0, 0, 1)",
    },
    { id: 3, marker: null, borderRight: 0, borderTop: 0 },
    { id: 4, marker: null, borderRight: 0, borderTop: 0 },
    {
      id: 5,
      marker: null,
      borderRight: "2px solid rgba(0, 0, 0, 1)",
      borderTop: 0,
    },
    { id: 6, marker: null, borderRight: 0, borderTop: 0 },
    { id: 7, marker: null, borderRight: 0, borderTop: 0 },
    {
      id: 8,
      marker: null,
      borderRight: "2px solid rgba(0, 0, 0, 1)",
      borderTop: 0,
    },
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
