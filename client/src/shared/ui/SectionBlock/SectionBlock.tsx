import Box from "@mui/material/Box";
import type { ReactNode } from "react";

interface SectionBlockProps {
    children: ReactNode;
}

export default function SectionBlock({
    children,
}: SectionBlockProps) {
    return (
        <Box
            sx={{
                mb: 4,
            }}
        >
            {children}
        </Box>
    );
}