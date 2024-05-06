import React, { useEffect } from "react";

// Utilities
import _ from "lodash";

import { Box, Button, Stack, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { successMarker, reset } from "./store/reducers/board";

import Board from "./component/Board";

function App() {
  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.board);

  useEffect(() => {

  }, [board]);

  const handlePlayer1Move = (placement) => {
    if (_.isEqual(board[placement]?.marker, "open")) {
      dispatch(successMarker({ id: placement, marker: "player1" }));
      handleAIMove();
    }
  };

  const handleAIMove = (placement) => {
    while (true) {
      let rand = Math.floor(Math.random() * 9);
      if (_.isEqual(board[rand]?.marker, "open") && placement !== rand) {
        dispatch(successMarker({ id: rand, marker: "player2" }));
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
        <Board board={board} handlePlayer1Move={handlePlayer1Move} />
        <Box display="flex" justifyContent="center">
          <Button variant="contained">Reset</Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
