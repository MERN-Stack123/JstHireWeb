export const registerCustomStyle = {
  sxContainer: {
    height: "full",
    bgcolor: "white",
    justifyContent: "center",
    alignItems: "center",
    columnSpacing: { sx: 1, sm: 3, md: 4 },
    paddingX: 8,
    paddingBottom: 4,
    maxWidth: "full",
  },
  sxTypographyh1: {
    variant: "h1",
    fontWeight: 500,
    fontSize: 48,
    py: 2,
    typography: {
      sm: "h5",
      xs: "h4",
      lg: "h3",
    },
  },
  sxTypographyh6: {
    variant: "h3",
    fontSize: 18,
    fontWeight: 400,
    pb: 6,
    color: "#7A7A7A",
  },
  sxTextfield: {
    input: {
      color: "#14C38E",
      fontSize: 18,
      padding: 1.5,
    },
    label: {
      fontSize: 15,
      fontWeight: 400,
      color: "black",
      padding: 1.5,
    },
    bgcolor: "white",
    borderRadius: 2,
    maxWidth: 539,
    "& .MuiInput-underline:before": {
      borderBottomColor: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#14C38E",
    },
  },
  // sx area field
  sxAreaField: {
    "& textarea": {
      color: "#14C38E",
      fontSize: 18,
      paddingX: 1.5,
      maxWidth: 459,
    },
    "& label": {
      fontSize: 15,
      fontWeight: 400,
      color: "black",
      paddingX: 1.5,
    },
    maxWidth: 539,
    "& .MuiInput-underline:before": {
      borderBottomColor: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#14C38E",
    },
  },

  sxIcon: {
    color: "black",
    padding: 1.5,
  },
  sxError: {
    color: "red",
    fontSize: 13,
  },
  sxTypoAccount: {
    fontWeight: 500,
    py: 2,
    fontSize: 18,
  },
  sxTypoLogin: {
    color: "#14C38E",
    fontWeight: 500,
    px: 0.5,
    fontSize: 18,
    cursor: "pointer",
  },
  sxMark: {
    fontWeight: 500,
    fontSize: 18,
  },
  sxButtonRegister: {
    variant: "contained",
    color: "#FFFFFF",
    bgcolor: "#14C38E",
    "&:hover": { backgroundColor: "#00FFAB" },
    textTransform: "capitalize",
    size: "medium",
  },
  sxButtonGrid: {
    alignItems: "center",
    justifyContent: "flex-end",
    maxWidth: 539,
  },
};
