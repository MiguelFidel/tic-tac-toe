import React, { memo } from "react";

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
      {_.isEqual(isMarked, "O") ? (
        <RadioButtonUncheckedIcon sx={{ fontSize: "15em" }} color="primary" />
      ) : _.isEqual(isMarked, "X") ? (
        <CloseIcon sx={{ fontSize: "15em" }} color="error" />
      ) : null}
    </StyledBox>
  );
}

export default memo(Marker);
