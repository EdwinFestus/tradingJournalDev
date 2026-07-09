import { Grid } from "@mui/material";
import type { ReactNode } from "react";

interface DashboardGridProps {
    children: ReactNode;
}

export default function DashboardGrid({
    children,
}: DashboardGridProps) {
    return (
        <Grid
            container
            spacing={3}
            sx={{
                mb: 4,
            }}
        >
            {children}
        </Grid>
    );
}