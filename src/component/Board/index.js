import React, { memo } from "react";
import { Grid, Stack, styled, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Marker from "../Marker";

const StyledBox = styled(Button)({
  border: "2px solid rgba(0, 0, 0, 1)",
  height: "15em",
  width: "15em",
  ":hover": {
    backgroundColor: " #d3d3d3",
  },
});

function Board({ board, handlePlayer1Move }) {
  return (
    <Box justifyContent="center" display="flex" mt={5}>
      <Stack>
        <Grid container>
          <Grid item>
            <StyledBox
              sx={{ borderRight: 0 }}
              onClick={() => handlePlayer1Move(0)}
            >
              <Marker isMarked={board[0]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox onClick={() => handlePlayer1Move(1)}>
              <Marker isMarked={board[1]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox
              sx={{ borderLeft: 0 }}
              onClick={() => handlePlayer1Move(2)}
            >
              <Marker isMarked={board[2]?.marker} />
            </StyledBox>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <StyledBox
              sx={{ borderRight: 0, borderTop: 0 }}
              onClick={() => handlePlayer1Move(3)}
            >
              <Marker isMarked={board[3]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox
              sx={{ borderRight: 0, borderTop: 0 }}
              onClick={() => handlePlayer1Move(4)}
            >
              <Marker isMarked={board[4]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox
              sx={{ borderTop: 0 }}
              onClick={() => handlePlayer1Move(5)}
            >
              <Marker isMarked={board[5]?.marker} />
            </StyledBox>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <StyledBox
              sx={{ borderRight: 0, borderTop: 0 }}
              onClick={() => handlePlayer1Move(6)}
            >
              <Marker isMarked={board[6]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox
              sx={{ borderRight: 0, borderTop: 0 }}
              onClick={() => handlePlayer1Move(7)}
            >
              <Marker isMarked={board[7]?.marker} />
            </StyledBox>
          </Grid>
          <Grid item>
            <StyledBox
              sx={{ borderTop: 0 }}
              onClick={() => handlePlayer1Move(8)}
            >
              <Marker isMarked={board[8]?.marker} />
            </StyledBox>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default memo(Board);
