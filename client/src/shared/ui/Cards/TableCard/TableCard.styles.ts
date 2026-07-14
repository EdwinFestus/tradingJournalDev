import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const TableContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    overflowX: "auto",

    "& .MuiDataGrid-root": {
        border: 0,
        backgroundColor: "transparent",
    },

    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: theme.palette.action.hover,
    },

    "& .MuiDataGrid-cell": {
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
}));