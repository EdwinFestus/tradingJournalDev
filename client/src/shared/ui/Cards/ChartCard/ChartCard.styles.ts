import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ChartContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));