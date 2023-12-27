import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
const StyledGrid = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledTypography = styled(Typography)({
  fontWeight: 500,
  fontSize: "18px",
});
const StyledButton = styled(Button)({
  textTransform: "initial",
  fontSize: "12px",
  fontWeight: 500,
  color: "#22EFB1",
  variant: "text",
});
const StyledCardContent = styled(CardContent)({
  marginTop: "-12px",
  marginBottom: "-16px",
});

const JobFilter = () => {
  return (
    <Grid>
      <Card elevation={0}>
        <StyledCardContent>
          <StyledGrid container>
            <StyledTypography>Job Filter</StyledTypography>
            <StyledButton type="submit">Clear all</StyledButton>
          </StyledGrid>
        </StyledCardContent>
      </Card>
    </Grid>
  );
};

export default JobFilter;
