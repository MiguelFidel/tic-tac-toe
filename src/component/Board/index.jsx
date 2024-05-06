import React, { memo } from "react";
import { Grid, styled, Button, Box } from "@mui/material";
import Marker from "../Marker";

const SytledButton = styled(Button)({
  border: "2px solid rgba(0, 0, 0, 1)",
  borderRadius: "0px",
  height: "15em",
  width: "15em",
  ":hover": {
    backgroundColor: " #d3d3d3",
  },
});

function Board({ board, handleMarker }) {
  return (
    <Box sx={{ width: 630 }}>
      <Grid container spacing={0}>
        {board?.map((data) => (
          <Grid item xs={4}>
            <SytledButton
              sx={{
                borderRight: data?.borderRight,
                borderTop: data?.borderTop,
              }}
              onClick={() => handleMarker(data)}
            >
              <Marker isMarked={data?.marker} />
            </SytledButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default memo(Board);
