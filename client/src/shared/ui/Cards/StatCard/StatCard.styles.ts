import { alpha, styled } from "@mui/material/styles";
import AppCard from "../AppCard/AppCard";
import Box from "@mui/material/Box";

export const StyledStatCard = styled(AppCard)(({ theme }) => ({
  height: "100%",
  transition: "all .25s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 52,
  height: 52,

  borderRadius: 16,

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  background: alpha(theme.palette.primary.main, .08),

  color: theme.palette.primary.main,
}));