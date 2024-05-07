import React, { useEffect, useState, useRef } from "react";

// Utilities
import _ from "lodash";

import { Box, Button, Stack, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { successMarker, reset } from "./store/reducers/board";

import Board from "./component/Board";

function App() {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.board);
  const [moveCounter, setMoveCounter] = useState(0);
  const [winTile, setWinTile] = useState([]);

  const win = useRef(null);

  useEffect(() => {
    // O winning
    handleCheckHorizontalWin("O");
    handleCheckVerticalWin("O");
    handleCheckLeftDiagonalWin("O");
    handleCheckRightDiagonalWin("O");

    // X winning
    handleCheckHorizontalWin("X");
    handleCheckVerticalWin("X");
    handleCheckLeftDiagonalWin("X");
    handleCheckRightDiagonalWin("X");

    // Draw
    if (_.isEqual(moveCounter, 5) && _.isNull(win.current)) {
      win.current = "Draw";
      setWinTile([]);
    }
    // eslint-disable-next-line
  }, [board]);

  // AI Moves
  useEffect(() => {
    if (moveCounter > 0 && moveCounter < 5 && _.isNull(win.current))
      handleAIMove();
    // eslint-disable-next-line
  }, [moveCounter]);

  const handleResetBoard = () => {
    dispatch(reset());
    setMoveCounter(0);
    setWinTile([]);
    win.current = null;
  };

  const handleCheckHorizontalWin = (marker) => {
    for (let i = 0; i < 9; i = i + 3) {
      if (
        board[i].marker === marker &&
        board[i + 1].marker === marker &&
        board[i + 2].marker === marker
      ) {
        win.current = marker;
        setWinTile([i, i + 1, i + 2]);
        break;
      }
    }
  };

  const handleCheckVerticalWin = (marker) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i]?.marker === marker &&
        board[i + 3]?.marker === marker &&
        board[i + 6]?.marker === marker
      ) {
        win.current = marker;
        setWinTile([i, i + 3, i + 6]);
        break;
      }
    }
  };

  const handleCheckLeftDiagonalWin = (marker) => {
    if (
      board[0]?.marker === marker &&
      board[4]?.marker === marker &&
      board[8]?.marker === marker
    ) {
      win.current = marker;
      setWinTile([0, 4, 8]);
    }
  };

  const handleCheckRightDiagonalWin = (marker) => {
    if (
      board[2]?.marker === marker &&
      board[4]?.marker === marker &&
      board[6]?.marker === marker
    ) {
      win.current = marker;
      setWinTile([2, 4, 6]);
    }
  };

  const handleMarker = (data) => {
    if (_.isNull(data?.marker) && _.isNull(win.current)) {
      dispatch(successMarker({ ...data, marker: "O" }));
      setMoveCounter((prev) => prev + 1);
    }
  };

  const handleAIMove = () => {
    while (true) {
      let rand = Math.floor(Math.random() * 9);
      if (_.isNull(board[rand]?.marker)) {
        dispatch(successMarker({ ...board[rand], marker: "X" }));
        break;
      }
    }
  };

  return (
    <Box justifyContent="center" display="flex" mt={5}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">Tic-Tac-Toe</Typography>
        </Box>
        <Board board={board} handleMarker={handleMarker} winTile={winTile} />
        <Box display="flex" justifyContent="center" sx={{ height: "2em" }}>
          {!_.isNull(win.current) && (
            <Typography variant="h5">
              {win.current !== "Draw" ? `"${win.current}" win!` : win.current}
            </Typography>
          )}
        </Box>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleResetBoard}>
            Reset
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
