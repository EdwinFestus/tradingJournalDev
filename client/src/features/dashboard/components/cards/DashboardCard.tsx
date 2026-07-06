import { Paper, Typography, Box } from "@mui/material";
import type { ReactNode } from "react";

interface DashboardCardProps {
    title: string;
    subtitle?: string;
    action?: ReactNode;
    children: ReactNode;
    height?: number | string;
}

export default function DashboardCard({
    title,
    subtitle,
    action,
    children,
    height = 380,
}: DashboardCardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                height,
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Box>
                    <Typography variant="h6">
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {action}
            </Box>

            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,
                }}
            >
                {children}
            </Box>
        </Paper>
    );
}