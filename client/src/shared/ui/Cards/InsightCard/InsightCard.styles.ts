import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const IconContainer = styled(Box)(({ theme }) => ({
    width: 52,
    height: 52,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: 16,

    background: alpha(theme.palette.primary.main, .10),

    color: theme.palette.primary.main,
}));