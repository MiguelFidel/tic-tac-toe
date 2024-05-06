import React, { useEffect, useState, useRef } from "react";

// Utilities
import _ from "lodash";

import { Box, Button, Stack, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { successMarker, reset } from "./store/reducers/board";

import Board from "./component/Board";
import { PlayerWin, Draw } from "./component/Alert";

function App() {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.board);
  const [moveCounter, setMoveCounter] = useState(0);

  const win = useRef(null);

  const handleResetBoard = () => {
    dispatch(reset());
    setMoveCounter(0);
    win.current = null;
  };

  const handlePopUp = () => {
    PlayerWin.fire({ title: `${_.startCase(win.current)} Win!` }).then(
      (result) => {
        if (result.isConfirmed) {
          handleResetBoard();
        }
      }
    );
  };

  const handleCheckHorizontalWin = (player) => {
    for (let i = 0; i < 9; i = i + 3) {
      if (
        board[i].marker === player &&
        board[i + 1].marker === player &&
        board[i + 2].marker === player
      ) {
        win.current = player;
        handlePopUp();
        break;
      }
    }
  };

  const handleCheckVerticalWin = (player) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i]?.marker === player &&
        board[i + 3]?.marker === player &&
        board[i + 6]?.marker === player
      ) {
        win.current = player;
        handlePopUp();
        break;
      }
    }
  };

  const handleCheckLeftDiagonalWin = (player) => {
    if (
      board[0]?.marker === player &&
      board[4]?.marker === player &&
      board[8]?.marker === player
    ) {
      win.current = player;
      handlePopUp();
    }
  };

  const handleCheckRightDiagonalWin = (player) => {
    if (
      board[2]?.marker === player &&
      board[4]?.marker === player &&
      board[6]?.marker === player
    ) {
      win.current = player;
      handlePopUp();
    }
  };

  useEffect(() => {
    // Player 1 winning
    handleCheckHorizontalWin("player1");
    handleCheckVerticalWin("player1");
    handleCheckLeftDiagonalWin("player1");
    handleCheckRightDiagonalWin("player1");

    // Player 2 winning
    handleCheckHorizontalWin("player2");
    handleCheckVerticalWin("player2");
    handleCheckLeftDiagonalWin("player2");
    handleCheckRightDiagonalWin("player2");

    // Draw
    if (_.isEqual(moveCounter, 5) && _.isNull(win.current))
      Draw.fire().then((result) => {
        if (result.isConfirmed) {
          handleResetBoard();
        }
      });
    // eslint-disable-next-line
  }, [board]);

  // AI Moves

  useEffect(() => {
    if (moveCounter > 0 && _.isNull(win.current)) handleAIMove();
    // eslint-disable-next-line
  }, [moveCounter]);

  const handlePlayer1Move = (placement) => {
    if (_.isNull(board[placement]?.marker)) {
      dispatch(successMarker({ id: placement, marker: "player1" }));
      setMoveCounter((prev) => prev + 1);
    }
  };

  const handleAIMove = () => {
    let i = 0;
    while (i < 99) {
      let rand = Math.floor(Math.random() * 9);
      if (_.isNull(board[rand]?.marker)) {
        dispatch(successMarker({ id: rand, marker: "player2" }));
        break;
      }
      i++;
    }
  };

  return (
    <Box justifyContent="center" display="flex" mt={5}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">Tic-Tac-Toe</Typography>
        </Box>
        <Board board={board} handlePlayer1Move={handlePlayer1Move} />
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
