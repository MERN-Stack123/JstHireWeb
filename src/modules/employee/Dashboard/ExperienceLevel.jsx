import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

const StyledLabel = styled("label")({
  fontSize: "12px",
  fontWeight: 500,
});
const StyledTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: 500,
  color: "#B6B6B6",
  textTransform: "lowercase",
  ml: "auto",
});
const StyledButton = styled(Button)({
  fontSize: "12px",
  fontWeight: 500,
  color: "#22EFB1",
  textTransform: "initial",
  variant: "text",
});
const StyledTypographyEx = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  color: "#14C38E",
});
const StyledCheckBox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },
  "& .MuiIconButton-root": {
    alignItems: "center",
  },
  "&.Mui-checked": {
    color: "#14C38E", 
  },
});
const StyledGrid = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledCardContent = styled(CardContent)({
  marginTop: "-7px",
  marginBottom: "-13px",
});

const ExperienceLevel = () => {
  return (
    <Grid>
      <Card elevation={0}>
        <StyledCardContent>
          <StyledGrid container>
            <StyledTypographyEx>Experience Level</StyledTypographyEx>
            <StyledButton type="submit">Clear</StyledButton>
          </StyledGrid>
          {/* entry level start */}
          <StyledGrid container>
            <FormControlLabel
              control={<StyledCheckBox name="checkbox1" />}
              label={<StyledLabel>Entry Level</StyledLabel>}
            />
            <StyledTypography>255 jobs</StyledTypography>
          </StyledGrid>
          {/* entry level end */}

          {/* intermediate level start */}
          <StyledGrid container>
            <FormControlLabel
              control={<StyledCheckBox name="checkbox2" />}
              label={<StyledLabel>Intermediate</StyledLabel>}
            />
            <StyledTypography>124 jobs</StyledTypography>
          </StyledGrid>
          {/* intermediate level end */}

          {/* expert level start */}
          <StyledGrid container>
            <FormControlLabel
              control={<StyledCheckBox name="checkbox3" />}
              label={<StyledLabel>Expert</StyledLabel>}
            />
            <StyledTypography>2404 jobs</StyledTypography>
          </StyledGrid>
          {/* expert level end */}
        </StyledCardContent>
      </Card>
    </Grid>
  );
};

export default ExperienceLevel;
