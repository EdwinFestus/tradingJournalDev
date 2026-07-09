import {
    Paper,
    type PaperProps,
} from "@mui/material";

import type { ReactNode } from "react";

interface BaseCardProps extends PaperProps {
    children: ReactNode;
}

export default function BaseCard({
    children,
    sx,
    ...props
}: BaseCardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                transition: "all .25s ease",

                "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-2px)",
                    boxShadow: 6,
                },

                ...sx,
            }}
            {...props}
        >
            {children}
        </Paper>
    );
}