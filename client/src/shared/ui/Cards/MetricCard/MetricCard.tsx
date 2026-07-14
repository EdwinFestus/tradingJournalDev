import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";

import AppCard from "../AppCard";

interface MetricCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: ReactNode;
    color?: string;
}

export default function MetricCard({
    title,
    value,
    subtitle,
    icon,
    color = "primary.main",
}: MetricCardProps) {
    return (
        <AppCard>
            <Stack spacing={2}>
                <Box
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: `${color}15`,
                        color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {icon}
                </Box>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                    }}
                >
                    {value}
                </Typography>

                {subtitle && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {subtitle}
                    </Typography>
                )}
            </Stack>
        </AppCard>
    );
}