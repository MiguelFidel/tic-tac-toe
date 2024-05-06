import React from "react";

// Utilities
import _ from "lodash";

import { Box, styled } from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const StyledBox = styled(Box)({
  height: "100%",
  width: "100%",
});

function Marker({ isMarked }) {
  return (
    <StyledBox>
      {_.isEqual(isMarked, "player1") ? (
        <RadioButtonUncheckedIcon sx={{ fontSize: "15em" }} />
      ) : _.isEqual(isMarked, "player2") ? (
        <CloseIcon sx={{ fontSize: "15em" }} />
      ) : null}
    </StyledBox>
  );
}

export default Marker;
