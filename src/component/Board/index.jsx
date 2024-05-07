import React, { memo } from "react";
import { Grid, styled, Button, Box } from "@mui/material";
import Marker from "../Marker";
import _ from "lodash";

const SytledButton = styled(Button)({
  border: "2px solid rgba(0, 0, 0, 1)",
  borderRadius: "0px",
  height: "15em",
  width: "15em",
  ":hover": {
    backgroundColor: " #d3d3d3",
  },
});

function Board({ board, winTile, handleMarker }) {
  return (
    <Box sx={{ width: 630 }}>
      <Grid container spacing={0}>
        {board?.map((data, index) => (
          <Grid item xs={4}>
            <SytledButton
              sx={{
                borderRight: data?.borderRight,
                borderTop: data?.borderTop,
                background: _.some(winTile, (value) => value === index)
                  ? "#5cb85c"
                  : "#fff",
                ":hover": {
                  background: _.some(winTile, (value) => value === index)
                    ? "#5cb85c"
                    : "#d3d3d3",
                },
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
