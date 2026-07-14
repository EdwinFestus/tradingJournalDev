import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export const StyledProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,

    borderRadius: 999,

    backgroundColor: theme.palette.action.hover,
}));