import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode;
}

export default function AppContainer({
    children,
}: AppContainerProps) {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 1600,
                mx: "auto",
                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                },
                py: 4,
            }}
        >
            {children}
        </Box>
    );
}