import React, { useEffect, useState, useRef } from "react";

// Utilities
import _ from "lodash";

import { Box, Button, Stack, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { successMarker, reset } from "./store/reducers/board";

import Board from "./component/Board";
import { Alert } from "./component/Alert";

function App() {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.board);
  const [moveCounter, setMoveCounter] = useState(0);

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
    if (_.isEqual(moveCounter, 5) && _.isNull(win.current))
      Alert.fire().then((result) => {
        if (result.isConfirmed) {
          handleResetBoard();
        }
      });
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
    win.current = null;
  };

  const handlePopUp = () => {
    Alert.fire({ title: `${_.startCase(win.current)} Win!` }).then((result) => {
      if (result.isConfirmed) {
        handleResetBoard();
      }
    });
  };

  const handleCheckHorizontalWin = (marker) => {
    for (let i = 0; i < 9; i = i + 3) {
      if (
        board[i].marker === marker &&
        board[i + 1].marker === marker &&
        board[i + 2].marker === marker
      ) {
        win.current = marker;
        handlePopUp();
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
        handlePopUp();
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
      handlePopUp();
    }
  };

  const handleCheckRightDiagonalWin = (marker) => {
    if (
      board[2]?.marker === marker &&
      board[4]?.marker === marker &&
      board[6]?.marker === marker
    ) {
      win.current = marker;
      handlePopUp();
    }
  };

  const handleMarker = (data) => {
    if (_.isNull(data?.marker)) {
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
        <Board board={board} handleMarker={handleMarker} />
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
